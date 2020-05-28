import mongoose from 'mongoose';

const { Schema } = mongoose;

const Cart = new Schema(
  {
    userid: { type: String, required: true },
    productids: [{ type: String, required: false }],
    quantities: [{ type: Number, required: false }],
    expiryDate: Number
  },
  { timestamps: true }
);

const CartModel = mongoose.model('cart', Cart);
export default CartModel;
