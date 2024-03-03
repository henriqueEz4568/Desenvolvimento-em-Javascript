const express = require('express');
let app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'))
const rotasProjeto=require('./routers/router.js')
app.engine('ejs', require('ejs').__express);
app.use(express.urlencoded({extended:false}));
app.use(express.json());
const port=5000
const rotasLogin = require('./routers/routerlogin.js')
const rotasCadastro = require('./routers/routerCadastro.js')

app.listen(port, ()=>console.log(`servidor rodando na port: ${port}`))
 //app.get('/', (req,res)=>res.send('hello world'))
app.use('/',rotasProjeto)
app.use('/home/',rotasLogin)
app.use('/home/login/', rotasCadastro)