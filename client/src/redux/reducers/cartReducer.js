import {
  ADD_ITEM,
  LOAD_CART,
  REMOVE_ITEM,
  CLEAR_ITEM,
  REMOVE_ALL_ITEMS,
  UPDATE_CART_FROM_STORAGE
} from '../actions/cartActions';
/*
Cart Object
{ Product Shape
    key:  could use slug/ entry id ,
    name: 'redux item 1',
    price: decimal value
    slug: so were can create link back to product
    images: uri for display purposes,
    quantity: ammount in cart
  },
  {...},

*/

const INIT_STATE = {};

export default function cartReducer(state = INIT_STATE, action = {}) {
  switch (action.type) {
    case ADD_ITEM: {
      let updatedCart = state;
      const { name, price, slug, images } = action.payload;
      

      if (updatedCart[slug]) {
        updatedCart[slug].quantity += 1;
      } else {
        updatedCart[slug] = {
          name,
          price,
          quantity: 1,
          slug,
          images
        };
      }

      return updatedCart;
    }
    case REMOVE_ITEM: {
      const updatedCart = state;
      const { name, price, slug, images } = action.payload;

      if (updatedCart[slug] && updatedCart[slug].quantity >= 2) {
        // find and decrement
        updatedCart[slug].quantity -= 1;
      } else {
        // remove entry
        updatedCart[slug] = null;
      }

      return updatedCart;
    }

    case REMOVE_ALL_ITEMS: {
      const updatedCart = [];
      return updatedCart;
    }

    case CLEAR_ITEM: {
      const updatedCart = state;
      const { slug } = action.payload;
      updatedCart[slug] = null;
      return updatedCart;
    }

    case LOAD_CART: {
      let updatedCart = state;
      const cart = action.payload;
      updatedCart = cart;

      return updatedCart;
    }

    case UPDATE_CART_FROM_STORAGE: {
      let updatedCart = state;
      const cart = action.payload;
      updatedCart = cart;
      return updatedCart;
    }

    default:
      return state;
  }
}
