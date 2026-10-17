import { projectModel } from '../models/projectsModel.js';

export const addProject = async (req, res, next) => {
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
    console.log(error);
    next(error);
  }
};

export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await projectModel.find();
    console.log(projects);

    res.json({
      success: true,
      message: 'Projects retrieved successfully',
      data: projects
    });
    } catch (error) {
      console.log(error);
      next(error);
  }
};

export const getProjectById = async (req, res, next) => {
  try {
    let projectId = req.params.id;
    let project = await projectsModel.findById({ _id: projectId });

    res.json({
      success:true,
      message: 'Project retrieved successfully',
      data: project
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    let projectId = req.params.id;
    let updatedProject = projectsModel(req.body);
    updatedProject._id = projectId;

    let result = await ProjectsModel.updateOne({ _id: projectId }, updatedProject);
    console.log(result);

    res.json({
      success: true,
      message: 'Project updated successfully.'
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    let projectId = req.params.id;
    let result = await projectsModel.deleteProject({ _id: projectId });
    console.log(result);

    if (result.deletedCount > 0) {
      res.json({
        success: true,
        message: 'Project deleted successfully.'
      });
    } else {
      throw new Error('Project not found.');
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};