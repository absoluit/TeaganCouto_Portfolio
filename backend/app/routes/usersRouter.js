import express from 'express';
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router.get('/', usersController.getAllUsers);
router.get('/:id', usersController.getUserById);

router.post('/', usersController.addUser);

router.put('/:id', usersController.updateUser);

router.delete('/:id', usersController.deleteUser);

export default router;