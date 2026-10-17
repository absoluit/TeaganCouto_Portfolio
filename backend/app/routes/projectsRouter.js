import express from 'express';
import * as projectsController from '../controllers/projectsController.js';

const router = express.Router();

router.get('/', projectsController.getAllProjects);
router.get('/:id', projectsController.getProjectById);

router.post('/', projectsController.addProject);

router.put('/:id', projectsController.updateProject);

router.delete('/:id', projectsController.deleteProject);

export default router;