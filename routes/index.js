const express = require('express');
const AuthController =  require('../app/http/controller/AuthController');

const router = express.Router();

router.get('/signup', new AuthController().signup)
router.get('/login', new AuthController().login);
router.get('/logout', new AuthController().logout);

module.exports = router;
