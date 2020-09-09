import React from 'react';
import Button from '@material-ui/core/Button';
import CartPageItemContainer from './components/CartPageItemContainer';

const CartPage = props => {
  const { cart } = props;
  const cartObjArr = Object.values(cart);
  const cartList = cartObjArr.map(product => <CartPageItemContainer product={product} key={product.key} />);
  return (
    <div>
      <div> Cart Page </div>
      <div> {cartList} </div>
      <div>
        {' '}
        {cartList.length > 0 ? (
          <Button variant="contained" color="primary">
            {' '}
            Checkout{' '}
          </Button>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default CartPage;
