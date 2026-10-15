import { projectModel } from '../models/projects.model.js';

module.export.addProject = async (req, res) => {
  try {
    let newProject = projectModel(req.body);

    let result = await projectModel.create(newProject);
    console.log(result);

    res.json({
      success: true,
      message: 'Project added successfully',
      data: result
    });
  } catch (error) {
    next(error);
  }
};

module.export.getAllProjects = async (req, res) => {
  
}