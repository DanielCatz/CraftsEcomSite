export const ADD_ITEM = 'ADD_ITEM';
export const LOAD_CART = 'LOAD_CART';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_ITEM = 'CLEAR_ITEM';
export const REMOVE_ALL_ITEMS = 'REMOVE_ALL_ITEMS';
export const UPDATE_CART_FROM_STORAGE = 'UPDATE_CART_FROM_STORAGE';

export function addItem(product) {
  return {
    type: ADD_ITEM,
    payload: product
  };
}
export function removeItem(product) {
  return {
    type: REMOVE_ITEM,
    payload: product
  };
}

export function removeAllItems(product) {
  return {
    type: REMOVE_ALL_ITEMS,
    payload: product
  };
}

export function clearItem(product) {
  return {
    type: CLEAR_ITEM,
    payload: product
  };
}

export function loadCartFromLocalStorage(cart) {
  return {
    type: LOAD_CART,
    payload: cart
  };
}
export function updateCartFromStorage(cart) {
  return {
    type: UPDATE_CART_FROM_STORAGE,
    payload: cart
  };
}
