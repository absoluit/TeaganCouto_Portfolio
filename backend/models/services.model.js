const servicesSchema = new mongoose.Schema({ 
  title: String,
  description: String
});

const serviceSchema = mongoose.model('Services', serviceSchema);

export default mongoose.model('Services', serviceSchema)