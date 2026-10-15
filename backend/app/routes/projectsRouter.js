import express from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectsController.js';

router.post('/', projectsController.addProject);

module.exports = router;