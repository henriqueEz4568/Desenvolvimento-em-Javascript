const express = require('express');
let router = express.Router();
const cadastroController = require('../controllers/controller')
router.get('/cadastro', cadastroController.cadastro )


module.exports= router