import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { removeItem, addItem, clearItem, updateCartFromStorage } from '../../redux/actions/cartActions';
import LocalStorageMutator from '../business/utils';
import Api from '../business/api';

class CartItemContainer extends Component {
  addItem = () => {
    LocalStorageMutator.addProductToCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  removeItem = () => {
    LocalStorageMutator.removeProductFromCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  clearItem = () => {
    LocalStorageMutator.clearItem(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  render() {
    return (
      <div>
        <CartItem
          product={this.props.product}
          clearItem={this.clearItem}
          addItem={this.addItem}
          removeItem={this.removeItem}
        />
      </div>
    );
  }
}

const mapActionsToProp = {
  removeItem,
  addItem,
  clearItem,
  updateCartFromStorage
};
export default connect(
  null,
  mapActionsToProp
)(CartItemContainer);
