import Cart from './cart-model';
// upsert cart
export const getCarts = async (req, res) => {
  const body = req.params;
  if (!body) {
    return res.status(400).json({ success: false, error: 'Need to provide a cart' });
  }

  if (!body.id) return res.status(400).json({ success: false, error: 'Target ID missing' });

  await Cart.find({ userid: body.id }, (err, cart) => {
    if (err) return res.status(400).json({ success: false, error: err });

    if (!cart.length) return res.status(404).json({ success: false, error: 'No Carts Found' });

    return res.status(200).json({ success: true, data: cart });
  }).catch(err => console.log(err));
};
// delete expired cart

// get carts
export const carts = async (req, res) => {
  await Cart.find({}, (err, allCarts) => {
    if (err) return res.status(400).json({ success: false, error: err });

    if (!allCarts.length) return res.status(404).json({ success: false, error: 'No Carts Found' });

    return res.status(200).json({ success: true, data: allCarts });
  }).catch(err => console.log(err));
};
//
export const upsertCart = (req, res) => {
  const body = req.body;
  
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a cart'
    });
  }

  
  
  const cart = {
    userid: body.id,
    items :body.cart.map( item=>  {return {slug: item.slug, name: item.name, quantity: item.quantity}} )
  };
  
  // add 30 days
  const date = new Date(); // Now
  date.setDate(date.getDate() + 30);
  cart.expiryDate = date;
  
  
  
  if (!cart) {
    return res.status(400).json({ success: false, error: res.err });
  }
  

  const query = { userid: cart.userid };
  Cart.findOneAndUpdate(query, cart, { upsert: true, new: true }) 
  .then(data => {
      res.status(201).json({
        success: true,
        id: cart.id,
        message: 'Cart updated!',
        data
      });
    })
    .catch(error =>{
      console.log(error);
      res.status(400).json({
        error,
        message: 'Cart not created!'
      })
    
    }
    );
};

export const getCart = async (req, res)=>{
  const body = req.params;
  console.log(body);

  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a user'
    });
  }
  await Cart.find({userid: body.id}, (err, cart) => {
    if (err) return res.status(400).json({ success: false, error: err });

    if (!cart.length) return res.status(404).json({ success: false, error: 'No Cart Found' });

    return res.status(200).json({ success: true, data: cart });
  }).catch(err => console.log(err));


};
