// utils.js

const LocalStorageMutator = {
  getCartFromLocalStorage: () => {
    const existing = localStorage.getItem('cart');
    const data = existing || '[]';
    return JSON.parse(data);
  },

  setLocalStorageCart: cart => {
    if (!cart) return;
    localStorage.setItem('cart', JSON.stringify(cart));
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

  mergeSavedCartWithLSCart: (dbCart) => {
   let localCart = LocalStorageMutator.getCartFromLocalStorage();
    
    return dbCart;
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
  },

  clearProductFromCartLocalStorage: product => {
    const cart = LocalStorageMutator.getCartFromLocalStorage();

    const entryIndex = cart.findIndex(x => x.key === product.slug);
    // remove entry
    if (entryIndex !== -1) cart.splice(entryIndex, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  
  mapContentfulDataToLSCartShape: (products) =>{

    if(!products)
        return null;
    
    let fieldsArray = products.map(x => x.fields);

    var lsCart = fieldsArray.map(field => {
        return {
            key: field.slug,
            name: field.name,
            price: field.price,
            quantity: field.quantity,
            slug:field.slug,
            images: field.images
          };
    });      

    return lsCart;
},

mapMongoDataToLSCartShape: (mongoData, missingData) =>{
    let entryIndex = -1;
    let lsCart = [];
    for(var item of mongoData){
        entryIndex = missingData.findIndex(x => x.key === item.slug);
        
        if(entryIndex >=0){
            lsCart.push({
                key: item.slug,
                name: item.name,
                price: missingData[entryIndex].price,
                quantity: item.quantity,
                slug:item.slug,
                images: missingData[entryIndex].images
              });
        }
    }
    return lsCart;
}

};
export default LocalStorageMutator;
