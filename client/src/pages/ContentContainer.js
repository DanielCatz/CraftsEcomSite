import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { Hidden } from '@material-ui/core';
import clsx from 'clsx';
import Home from './home';
import Construction from './Construction';
import BrowseProductsContainer from './browseproductscontainer';
import CartBar from './components/CartBar';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Callback from './Callback';
import CartPageContainer from './CartPageContainer';
import LocalStorageMutator from './business/utils';
import { loadCartFromLocalStorage } from '../redux/actions/cartActions';
import Auth from '../Auth/Auth';
import Account from './Account';

class ContentContainer extends Component {
  constructor(props) {
    super(props);
    this.auth = new Auth(this.props.history);
    console.log(this.props);
  }

  componentWillMount() {
    // check user login state scenarios
    this.props.loadCartFromLocalStorage(LocalStorageMutator.getCartFromLocalStorage());


  }

  render() {
    const { classes, theme, isBarOpen, closeBar, openBar } = this.props;
    return (
      <div>
        <Navbar
          classes={classes}
          theme={theme}
          isBarOpen={isBarOpen}
          closeBar={closeBar}
          openBar={openBar}
          auth={this.auth}
        />
        <Hidden smDown>
          {LocalStorageMutator.getCartFromLocalStorage() ? (
            <CartBar classes={classes} theme={theme} isBarOpen={isBarOpen} closeBar={closeBar} openBar={openBar} />
          ) : (
            <div />
          )}
        </Hidden>
        <div
          className={clsx(classes.content, {
            [classes.contentShift]: isBarOpen
          })}
        >
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/browseproducts" component={BrowseProductsContainer} />
              <Route path="/cart" component={CartPageContainer} />
              <Route path="/callback" render={props => <Callback auth={this.auth} {...props} />} />
              <Route
                path="/account"
                render={props =>
                  this.auth.isAuthenticated() ? <Account auth={this.auth} {...props} /> : this.auth.login()
                }
              />

              <Route path="*" component={Construction} />
            </Switch>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProp = ({ cart }) => ({
  cart
});
const mapActionsToProp = {
  loadCartFromLocalStorage
};
export default connect(
  mapStateToProp,
  mapActionsToProp
)(ContentContainer);
