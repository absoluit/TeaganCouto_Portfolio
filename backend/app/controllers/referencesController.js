import referencesModel from '../models/referencesModel.js';

export const addReference = async (req, res, next) => {
  try {
    let newReference = referencesModel(req.body);

    let result = await referencesModel.create(newReference);
    console.log(result);

    res.json({
      success: true,
      message: 'Reference added successfully',
      data: result
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const getAllReferences = async (req, res, next) => {
  try {
    const references = await referencesModel.find();
    console.log(references);

    res.json({
      success: true,
      message: 'References retrieved successfully',
      data: references
    });
    } catch (error) {
      console.log(error);
      next(error);
  }
};

export const getReferenceById = async (req, res, next) => {
  try {
    let referenceId = req.params.id;
    let reference = await referencesModel.findById(referenceId);

    res.json({
      success:true,
      message: 'Reference retrieved successfully',
      data: reference
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateReference = async (req, res, next) => {
  try {
    let referenceId = req.params.id;
    let updatedReference = referencesModel(req.body);
    updatedReference._id = referenceId;

    let result = await referencesModel.updateOne({ _id: referenceId }, updatedReference);
    console.log(result);

    res.json({
      success: true,
      message: 'Reference updated successfully.'
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteReference = async (req, res, next) => {
  try {
    let referenceId = req.params.id;
    let result = await referencesModel.deleteOne({ _id: referenceId });
    console.log(result);

    if (result.deletedCount > 0) {
      res.json({
        success: true,
        message: 'Reference deleted successfully.'
      });
    } else {
      throw new Error('Reference not found.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};