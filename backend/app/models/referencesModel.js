import mongoose from 'mongoose';

const referenceSchema = new mongoose.Schema({ 
  name: String,
  testimonial: String,
  position: String,
  company: String
},
{
  collection: 'references'
});

referenceSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { 
    delete ret._id 
  }
});

const referencesModel = mongoose.model('References', referenceSchema);

export default referencesModel;