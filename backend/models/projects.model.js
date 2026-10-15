import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({ 
  title: String,
  completion: Date,
  description: String,
  image: String
},
{
  collection: 'projects'
});

projectSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) { 
    delete ret._id 
  }
});

const projectModel = mongoose.model('Projects', projectSchema);

export default mongoose.model('Projects', projectSchema);