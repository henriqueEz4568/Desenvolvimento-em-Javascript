const express = require('express');
let router = express.Router();
const loginController = require('../controllers/controller')
router.get('/login', loginController.login)
//router.get('/loginEfetuado' , loginController.loginEfetuado)
router.post('/cadastro', loginController.salvarForm)
module.exports= router