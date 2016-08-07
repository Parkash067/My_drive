///<reference path='./typings/node/node.d.ts'/>
///<reference path='./typings/express/express.d.ts'/>

import express=require('express');
var app:express.Express=express();
var ejs=require('ejs');

app.set('views','./views');

app.set('view engine','ejs');

app.use(express.static('./public'));//sir se pcuhege


app.listen(3000);

app.get('/',function(req,res)
{
	res.send("<html><head><title>Node</title></head><body><h1>Helo world</h1></body></html>");
})

app.get('/index.html',function(req,res)
{
  var a = "My Name";
  
  res.render("./index", { title : a });
})
app.get('*',function(req,res)
{
	res.send("Invalid url")
})