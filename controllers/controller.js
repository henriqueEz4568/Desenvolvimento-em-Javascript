const e = require("express");

const controller ={
index:(req,res)=>{
res.render('index')},

login:(req,res)=>{
res.render('login')},

cadastro:(req,res)=>{
res.render('cadastro')
    } ,
    loginEfetuado:(req,res)=>{
        let {email,senha}=req.query;
        res.send("login efetuado no email: "+email)
    },
    salvarForm:(req,res)=>{
        let{nome,email,telefone,genero,data_nascimento,cidade,estado,endereco}=req.body;
        res.send("O cadastro foi feito no email: "+email+" do genero: "+genero+" e do estado: "+estado)
    }


}
    
    
    
    
    module.exports= controller