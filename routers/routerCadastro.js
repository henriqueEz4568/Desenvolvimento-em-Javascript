const express = require('express');
let router = express.Router();

router.get('/cadastro', (req,res)=> res.send('pagina de cadastro'))


module.exports= router