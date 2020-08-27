import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import Api from './business/api';
import LocalStorageMutator from './business/utils';
import createClient from '../Contentful';

class Account extends Component {
  state = {
    message: ''
  };

  componentDidMount() {
    fetch('/private', {
      headers: { Authorization: `Bearer ${this.props.auth.getAccessToken()}` }
    })
      .then(res => {
        if (res.ok) {
          this.loadUserProfile();
          return res.json();
        }
        throw new Error('network respose not ok');
      })
      .then(res => this.setState({ message: res.message }))
      .catch(error => this.setState({ message: error.message }));
  }

  getProductsData = async slug => {
    try {
      const response = await createClient.getEntries({
        content_type: 'flowerStoreProduct',
        'fields.slug[in]': slug.toString()
      });
      
      if (response.items.length > 0) {
        const items = response.items;
        for(var item of items){
          // this.addItem(item);
          console.log(item);
        }
      } else {
        console.log('missing');
      }
    } catch (error) {
      console.log(error);
    }
  };


  loadUserProfile = () => {
    this.props.auth.getProfile((profile, error) => {
      Api.getUser(profile.email)
        .then(res => {
          console.log(res);
          this.props.auth.setUId(res.data.user[0]._id);
          this.setState({ profile, error });
        }) // bring in cart
        .catch(err => {
          if (err.response.status === 404) {
            // change this to a create then getUser on 200 status
            // this user dont exist yet
            const { name, email } = profile;
            Api.createUser({ name, email })
              .then(res => {
                console(res);
              })
              .catch(err => console.log('ask them to refresh page'));
          }
        });
    });
  };

  loadCart = async () => {
    const id = this.props.auth.getUId();
    try {
      //get cart state from last visit
      const response = await Api.getCart(id);
      
      let slugs = [];
      for(var item of response.data.data[0].items){
        slugs.push(item.slug);
      }
      //get updated info from Contentful to see if any items since last visit are out of stock
      this.getProductsData(slugs);

    } catch (error) {
      // get where response._id same
      console.log(error.response); // no cart
    }

    // if respose good, add to local cart
  };

  addItem = cart => {
    LocalStorageMutator.addProductToCartLocalStorage(this.state.product);
  };

  upsertCart = async () => {
    const cart = LocalStorageMutator.getCartFromLocalStorage();
    const id = this.props.auth.getUId();
    try{
    const response = await Api.upsertCart(id, cart);
    console.log(response);
    }
    catch(err){
      console.log(err);  
    }
  };

  render() {
    const { profile } = this.state;
    if (!profile) {
      return (
        <div>
          <p>{this.state.message} </p>
        </div>
      );
    }
    return (
      <div>
        <p>{this.state.message} </p>
        <h1>Profile</h1>
        <p>{profile.nickname}</p>
        <img style={{ maxWidth: 50, maxHeight: 50 }} src={profile.picture} alt="profile pic" />
        <pre>{JSON.stringify(profile, null, 2)} </pre>
        <Button onClick={this.loadCart}> Test Get Cart</Button>
        <Button onClick={this.upsertCart}> Test Persist Cart</Button>
      </div>
    );
  }
}

export default Account;
