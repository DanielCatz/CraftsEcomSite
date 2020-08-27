import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCartFromStorage } from '../redux/actions/cartActions';
import ProductDisplayPage from './ProductDisplayPage';
import createClient from '../Contentful';
import LocalStorageMutator from './business/utils';

class ProductDisplayPageContainer extends Component {
  constructor() {
    super();
    this.state = {
      error: 'good',
      message: 'good',
      slug: null,
      product: null
    };
  }

  componentWillMount() {
    const { slug } = this.props.match.params;
    console.log('boop');
    this.setState({ slug });
    this.getProductsData(slug);
  }

  componentWillReceiveProps(nextProps) {
    const { slug } = nextProps.match.params;
    console.log('boop');
    this.setState({ slug });
    this.getProductsData(slug);
  }

  getProductsData = async slug => {
    try {
      console.log(slug);
      const response = await createClient.getEntries({
        content_type: 'flowerStoreProduct',
        'fields.slug': slug,
        include: 3
      });
      if (response.items[0].fields) {
        this.setState({ product: response.items[0].fields });
        console.log(response);
      } else {
        // no matches in db, redirect to 404
        console.log("It's not you, it's me");
        this.props.history.push('/notfound');
      }
    } catch (error) {
      console.log(error);
      this.props.history.push('/notfound');
    }
  };

  addItem = () => {
    LocalStorageMutator.addProductToCartLocalStorage(this.state.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  render() {
    const { message, error, product } = this.state;

    if (product) return <ProductDisplayPage product={product} {...this.props} addItem={this.addItem} />;
    return <div>Loading</div>;
  }
}

const mapStateToProp = ({ cart }) => ({ cart });
const mapActionsToProp = {
  updateCartFromStorage
};
export default connect(
  mapStateToProp,
  mapActionsToProp
)(ProductDisplayPageContainer);
