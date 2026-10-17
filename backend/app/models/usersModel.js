import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  created: Date,
  updated: Date
},
{
  collection: 'users'
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { 
    delete ret._id 
  }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel;