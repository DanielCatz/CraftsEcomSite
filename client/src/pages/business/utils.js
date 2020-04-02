// utils.js

const LocalStorageMutator = {
  getCartFromLocalStorage: () => {
    const existing = localStorage.getItem('cart');
    const data = existing || '[]';
    return JSON.parse(data);
  },

  addProductToCartLocalStorage: product => {
    let cart = LocalStorageMutator.getCartFromLocalStorage();

    const { name, price, slug, images } = product;

    const entryIndex = cart.findIndex(x => x.key === product.slug);

    if (entryIndex >= 0) {
      cart[entryIndex].quantity += 1;
    } else {
      const item = {
        key: slug,
        name,
        price,
        quantity: 1,
        slug,
        images
      };
      cart = [...cart, item];
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  },

  removeProductFromCartLocalStorage: product => {
    const cart = LocalStorageMutator.getCartFromLocalStorage();

    const entryIndex = cart.findIndex(x => x.key === product.slug);

    if (entryIndex !== -1 && cart[entryIndex].quantity >= 2) {
      cart[entryIndex].quantity -= 1;
    } else {
      cart.splice(entryIndex, 1);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
  }
};
export default LocalStorageMutator;
