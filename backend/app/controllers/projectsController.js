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
    next(error);
  }
};

export const getAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find();
    console.log(projects);

    res.json({
      success: true,
      message: 'Projects retrieved successfully',
      data: projects
    });
    } catch (error) {
      next(error);
  }
};

export const getProjectById = async (req, res) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res) => {
  try {
    
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res) => {
  try {

  } catch (error) {
    next(error);
  }
};