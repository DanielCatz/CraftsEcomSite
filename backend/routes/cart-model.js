import mongoose from 'mongoose';

const { Schema } = mongoose;

const Cart = new Schema(
  {
    userid: { type: String, required: true },
    items:[
      {
        slug: { type: String, required: false },
        name:{ type: String, required: false },
        quantity: { type: Number, required: false }
      }
    ],
    expiryDate: { type: Number, required: false }
  },
  { timestamps: true }
);

const CartModel = mongoose.model('cart', Cart);
export default CartModel;
