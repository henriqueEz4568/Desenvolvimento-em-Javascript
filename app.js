const express = require('express');
let app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
const rotasProjeto=require('./routers/router.js')
app.engine('ejs', require('ejs').__express);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

const rotasLogin = require('./routers/routerlogin.js')
const rotasCadastro = require('./routers/routerCadastro.js')

app.listen(5000, ()=>console.log('servidor rodando na porta 5000'))
 //app.get('/', (req,res)=>res.send('hello world'))
app.use('/',rotasProjeto)
app.use('/home/',rotasLogin)
app.use('/home/login/', rotasCadastro)