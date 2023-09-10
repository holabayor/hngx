import express from 'express';
import PersonController from '../contollers';

const router = express.Router();

router.get('/', PersonController.get);
router.post('/', PersonController.create);
router.put('/', PersonController.update);
router.delete('/', PersonController.delete);

export default router;
