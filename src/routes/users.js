import express from 'express';
import usersController from '../controllers/usersController.js';

const route = express.Router();

route.post('/register', usersController.register);
route.post('/login', usersController.login);

export default route;
