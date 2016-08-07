///<reference path='./typings/tsd.d.ts'/>

import express=require('express');
//import ejs=require('ejs');
import path=require('path');

var app:express.Express=express();

//set view engine
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

//static middleware 
app.use(express.static(path.join(__dirname,'./public')));


//Set routing
app.get('/',function(req,res){
	console.log("File rendered");
	res.render('./home');
})

app.get('/about',function(req,res){
	res.render('./about');
	
})
app.get('/portfolio',function(req,res){
	res.render('./portfolio');
})
app.get('/blog',function(req,res){
	res.render('./blog');
})
app.get('/contact',function(req,res){
	res.render('./contact');
})

//listening mode
var port:number=process.env.Port || 3000;
var server=app.listen(port,function()
{
	var listeningport=server.address().port;
	console.log("Server is listening at port number "+listeningport);
})