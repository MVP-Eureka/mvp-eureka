import express from 'express';
import UserController from './controllers/UserController.js';
import { auth } from "express-oauth2-jwt-bearer";
import { customJwtMiddleware } from './middlewares/customtokenjwtvalidator.js';

const userController = new UserController();

const router = express.Router();

// const checkJwt = auth({
//   audience: process.env.AUTH0_AUDIENCE,
//   issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
//   tokenSigningAlg: "RS256",
//   getToken: (req) => {
//     req.cookies?.acess_token;
//   }
// });

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/u/protected', customJwtMiddleware, userController.protected);
router.get('/teste', userController.teste);

export default router;

