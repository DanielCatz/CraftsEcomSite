import React, { Component } from 'react';
import { connect } from 'react-redux';
import CartPageItem from './CartPageItem';
import { removeItem, addItem, clearItem, updateCartFromStorage } from '../../redux/actions/cartActions';
import LocalStorageMutator from '../business/utils';

class CartPageItemContainer extends Component {
  addItem = () => {
    LocalStorageMutator.addProductToCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  removeItem = () => {
    LocalStorageMutator.removeProductFromCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  clearItem = () => {
    LocalStorageMutator.clearProductFromCartLocalStorage(this.props.product);
    this.props.updateCartFromStorage(LocalStorageMutator.getCartFromLocalStorage());
  };

  render() {
    return (
      <div>
        <CartPageItem
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
)(CartPageItemContainer);
