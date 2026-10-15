const referenceSchema = new mongoose.Schema({ 
  name: String,
  testimonial: String,
  position: String,
  company: String
});

const referenceModel = mongoose.model('References', referenceSchema);

export default mongoose.model('References', referenceSchema)