import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  created: Date,
  updated: Date
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;