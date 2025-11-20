import express from 'express';
import UserController from './controllers/UserController.js'

const userController = new UserController();

const router = express.Router();

router.post('/register', userController.register);

export default router;

