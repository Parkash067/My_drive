///<reference path='./typings/tsd.d.ts'/>
import express=require('express');
import path=require('path');

var app:express.Express=express();

app.get('/:username',function(req,res) {
	console.log("Request sent");
	
	res.set('Content-type','text/html');
	res.send("<html><body><h1>Welcome "+req.params.username+"</h1></body></html>")
})

app.get('*',function(req,res){
	res.set('Content-type','text/html');
	res.send("<html><body><h1>404 Error </h1></body></html>")
})

var port:number=process.env.Port||3000;
var server=app.listen(port,function(){
	var listeningport=server.address().port;
	console.log("Sever is on listening at port: "+ listeningport);
})
