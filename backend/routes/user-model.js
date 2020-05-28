import mongoose from 'mongoose';

const { Schema } = mongoose;

const User = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    lastLogin: Number,
    role: { type: String, required: true }
  },
  { timestamps: true }
);

const UserModel = mongoose.model('user', User);
export default UserModel;
