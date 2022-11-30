const express = require('express');
let router = express.Router();
const loginController = require('../controllers/controller')
router.get('/login', loginController.login)

module.exports= router