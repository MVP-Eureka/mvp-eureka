import express from 'express';
import UserController from './controllers/UserController.js';
import { auth } from "express-oauth2-jwt-bearer";

const userController = new UserController();

const router = express.Router();

const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: `https://${process.env.AUTH0_DOMAIN}/`,
  tokenSigningAlg: "RS256",
});

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/u/protected', checkJwt, userController.protected);

export default router;

