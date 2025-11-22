import express from 'express';
import { verifyToken } from '../helpers/auth.js';
import petsController from '../controllers/petsController.js';

const route = express.Router();

route.get('/', petsController.getAll);
route.post('/', petsController.create);
route.get('/:id', petsController.getOne);
route.put('/:id', verifyToken, petsController.update);
route.delete('/:id', verifyToken, petsController.delete);

export default route;
