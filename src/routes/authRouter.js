const express = require('express')
const Router = express.Router();
const {login} = require('../controllers/userController');


Router.post('/login', login);

module.exports = Router