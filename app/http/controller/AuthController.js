const express = require('express');

class AuthController {
    signup(req, res, next) {
        res.render('auth/signup', {title: 'Signup'});
    }

    login (req, res, next) {
        res.render('auth/login', { title: 'Login' });
    }

    logout(req, res, next) {
        res.redirect('/login');
    }
}

module.exports = AuthController;