/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./typings/mustache/mustache.d.ts" />

/*import mustache=require('mustache');
var result = mustache.render("Hi, {{first}} {{last}}!", {
first: "Nicolas",
last: "Cage"
});

console.log(result);/*
Built-in modules
import path=require('path');
import url=require('url');

//third-party modules
import express=require('express');


var app:express.Express=express();
var parsedUrl=url.parse("http://www.example.com/profile?name=barry&age=22");


import {random_integer,add} from "./maths";
console.log(random_integer());
console.log(random_integer());
console.log(random_integer());

console.log(add(4,4));

//set configuration
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
app.set('strict routing',true);
app.set('case sensitive routing',true);
app.set('trust proxy',true);


//set middleware
app.use(express.static(path.join(__dirname,'./public')));

app.get('/',function(req,res){
	console.log(parsedUrl.protocol+"\n"+parsedUrl.host+"\n"+parsedUrl.query);
	res.send("Express_5");
})




var port=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listeningport=server.address().port;
	console.log("Server is listening at port number: "+listeningport);
})*/

/*var http=require('http');
function requestHandler(req,res){
	if(req.url==="/admin"){
		res.end("admin page");
	}
	else if(req.url==="/home"){
		res.end("home page");
	}
	else{
		res.end("404 error file not found");
	}
}

var server=http.createServer(requestHandler);
server.listen(3000);*/

var http=require('http');
var fs=require('fs');
var options={encoding:"utf-8"};

fs.readFile('myfile.txt',options,function(err,data){
	if(err)
	{
		console.log(err);
	}
	else{
	console.log(data.match(/x/gi).length + " letter X's");
	//console.log(data.toString());
	}
});

console.log("server start")