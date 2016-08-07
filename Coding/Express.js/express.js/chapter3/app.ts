///<reference path='./typings/express/express.d.ts'/>
///<reference path='./typings/node/node.d.ts'/>

import express=require('express');
import path=require('path');

var app:express.Express=express();

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.set('title','user');
app.set('case sensitive routing',true); // By default: Disabled. Treats "/Foo" and "/foo" as the same.
app.set('strict routing',true) //By default: Disabled. Treats "/foo" and "/foo/" as the same by the router.
app.enable('trust proxy');


app.get('/admin',function(req,res){
	console.log("The title is "+app.get('title')+'\n'+app.get('trust proxy'));
	res.send(req.originalUrl);
})
app.get('/admin/',function(req,res){
	console.log("The title is "+app.get('title')+'\n'+app.get('trust proxy'));
	res.send(req.originalUrl);
})


app.get('/Admin',function(req,res){
	console.log("The title is "+app.get('title')+'\n'+app.get('trust proxy'));
	res.send(req.originalUrl);
})


var port:number=process.env.PORT || 3000;
var server =app.listen(port,function()
{
	var listeningport=server.address().port;
	console.log("server is listening at "+listeningport);
})

//note::
/*app.use('/admin', function(req, res, next) {
  // GET 'http://www.example.com/admin/new'
  console.log(req.originalUrl); // '/admin/new'
  console.log(req.baseUrl); // '/admin'
  console.log(req.path); // '/new'
  next();
});*/
