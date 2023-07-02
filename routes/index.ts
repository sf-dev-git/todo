import express, { Router } from 'express';
import { AuthController } from '../app/http/controller/AuthController';

const router :Router = express.Router();

router.get('/signup', new AuthController().signup)
router.get('/login', new AuthController().login);
router.get('/logout', new AuthController().logout);

module.exports = router;
