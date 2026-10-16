import express from 'express';
import { getProjects, createProject, updateProject, deleteProject } from '../controllers/projectsController.js';

app.use('/api/projects', projectsRouter);
router.post('/', projectsController.addProject);

export default router;