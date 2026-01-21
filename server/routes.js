import express from 'express';
import UserController from './controllers/UserController.js';
import { customJwtMiddleware } from './middlewares/customtokenjwtvalidator.js';

const userController = new UserController();

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/edit', userController.editUser);
router.post('/u/protected', customJwtMiddleware, userController.protected);
router.get('/teste', userController.teste);

export default router;

