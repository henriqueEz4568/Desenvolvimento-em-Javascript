const express = require('express');
let router = express.Router();

router.get('/login', (req,res)=>res.send('pagina de login'))

module.exports= router