import mongoose from "mongoose";

const serviceSchema = new mongoose.Schema({ 
  title: String,
  description: String
},
{
  collection: 'services'
});

serviceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { 
    delete ret._id 
  }
});

const servicesModel = mongoose.model('Services', serviceSchema);

export default servicesModel;