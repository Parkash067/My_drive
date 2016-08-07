/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />

import express = require('express');
import path=require('path');

import home_route=require('./routes/home');
import about_route=require('./routes/about');

var app:express.Express=express();



app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.set('trust proxy',true);
app.set('case sensitive routing',true);
app.set('stric routing',true);
app.set('jsonp callback name','cb');
app.set('x-powered-by',false);

app.set('pk','name');

app.use(express.static(path.join(__dirname,'./public')));

app.use('/',home_route);
app.use('/',about_route);
app.use('/p2',about_route);

var port:number=process.env.PORT || 3000;
var server=app.listen(port,function(){
	var listeningport:number=server.address().port;
	console.log('Sever is listening at port '+listeningport);
});