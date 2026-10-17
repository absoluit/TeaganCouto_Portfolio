import servicesModel from '../models/servicesModel.js';

export const addService = async (req, res, next) => {
  try {
    let newService = servicesModel(req.body);

    let result = await servicesModel.create(newService);
    console.log(result);

    res.json({
      success: true,
      message: 'Service added successfully',
      data: result
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllServices = async (req, res, next) => {
  try {
    const services = await servicesModel.find();
    console.log(services);

    res.json({
      success: true,
      message: 'Services retrieved successfully',
      data: services
    });
    } catch (error) {
      console.log(error);
      next(error);
  }
};

export const getServiceById = async (req, res, next) => {
  try {
    let serviceId = req.params.id;
    let service = await servicesModel.findById(serviceId);

    res.json({
      success:true,
      message: 'Service retrieved successfully',
      data: service
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateService = async (req, res, next) => {
  try {
    let serviceId = req.params.id;
    let updatedService = servicesModel(req.body);
    updatedService._id = serviceId;

    let result = await servicesModel.updateOne({ _id: serviceId }, updatedService);
    console.log(result);

    res.json({
      success: true,
      message: 'Service updated successfully.'
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteService = async (req, res, next) => {
  try {
    let serviceId = req.params.id;
    let result = await servicesModel.deleteOne({ _id: serviceId });
    console.log(result);

    if (result.deletedCount > 0) {
      res.json({
        success: true,
        message: 'Service deleted successfully.'
      });
    } else {
      throw new Error('Service not found.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};