const CartAdapter = {

    getLocalStorageCartFromContentfulData(products){

        if(!products)
            return null;
        
        var lsCart = [];
        for (var item of products){
            lsCart.push(item.fields);
        }

        return lsCart;
    }


}

export default CartAdapter;