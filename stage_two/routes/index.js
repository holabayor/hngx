import express from 'express';
import PersonController from '../contollers/person';

const router = express.Router();

router.get('/', PersonController.get);
router.get('/:id', PersonController.getById);
router.post('/', PersonController.create);
router.put('/:id', PersonController.update);
router.delete('/:id', PersonController.delete);

export default router;
