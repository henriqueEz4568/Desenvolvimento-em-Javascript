const express = require('express');
let router = express.Router();
const indexController = require('../controllers/controller')
const { index } = require('../controllers/controller');
router.get('/home', indexController.index)
//router.get('login', (req,res)=>res.send('pagina de login'))
router.get('/loginEfetuado' , indexController.loginEfetuado)

module.exports=router