import express from 'express';
import * as referencesController from '../controllers/referencesController.js';

const router = express.Router();

router.get('/', referencesController.getAllReferences);
router.get('/:id', referencesController.getReferenceById);

router.post('/', referencesController.addReference);

router.put('/:id', referencesController.updateReference);

router.delete('/:id', referencesController.deleteReference);

export default router;