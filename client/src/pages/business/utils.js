// utils.js

const LocalStorageMutator = {
  getCartFromLocalStorage: () => {
    const existing = localStorage.getItem('cart');
    const data = existing || '{}';
    return JSON.parse(data);
  },

  setLocalStorageCart: cart => {
    if (!cart) return;
    localStorage.setItem('cart', JSON.stringify(cart));
  },
  addProductToCartLocalStorage: product => {
    let cart = LocalStorageMutator.getCartFromLocalStorage();
    
      cart[product.slug] = {
        key: product.slug,
        name: product.name,
        price: product.price,
        quantity: cart[product.slug] ? cart[product.slug].quantity + 1 : 1,
        slug: product.slug,
        images: product.images
      }
    
    localStorage.setItem('cart', JSON.stringify(cart));
  },

  mergeSavedCartWithLSCart: (dbCart) => {
   let localCart = LocalStorageMutator.getCartFromLocalStorage();
   if(localCart.length === 0){
      return dbCart; 
   }
   
   let finalCart = [];
   let product;
   for(var item of localCart){
    // entryIndex = missingData.findIndex(x => x.key === item.slug);

    //if()


    }
     
    return dbCart;
  },

  removeProductFromCartLocalStorage: product => {
    const cart = LocalStorageMutator.getCartFromLocalStorage();

    if(cart[product.slug])
    cart[product.slug].quantity -=1;

    localStorage.setItem('cart', JSON.stringify(cart));
  },

  clearProductFromCartLocalStorage: product => {
    const cart = LocalStorageMutator.getCartFromLocalStorage();
    if(cart[product.slug])
      cart[product.slug] = null;
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
