/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />

import express =require('express');
import path=require('path');

var app:express.Express=express();

var user=[
	
		
		{
			name:"pk",
			password:"2322ad",
			email:"pk_bscs@yahoo.com",
			right:"admin"
		},
		
		
		{
			name:"pk",
			password:"2322ad",
			email:"pk_bscs@yahoo.com",
			right:"student"
		}
	];
	
	

//settings and configuration

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

app.set('strict routing',true);
app.set('case sensitive routing',true);
app.set('jsonp callback name','cb');
app.set('trust proxy',true);
app.set('x-powered-by',false);

//static middleware
app.use(express.static(path.join(__dirname,'./public')));

app.use('/admin/:name',function(req:express.Request,res:express.Response,next:Function)
{
	var check=false;
	for(var i=0;i<user.length;i++)
	{
		if(req.params.name===user[i].name &&user[i].right==='admin')
		{
			check=true;
			console.log(user[i].right);
			next();
			
		}
		
	}
	if(check===false)
	{
		next('error');
	}
	
});

app.use('/student/:name',function(req:express.Request,res:express.Response,next:Function)
{
	var check=false;
	for(var i=0;i<user.length;i++)
	{
		if(req.params.name===user[i].name &&user[i].right==='student')
		{
			check=true;
			console.log(user[i].right);
			next();
			
		}
		
	}
	if(check===false)
	{
		next('error');
	}
	
})

app.get('/admin/:name',function(req:express.Request,res:express.Response){
		console.log(req.originalUrl);
		res.render('./admin');
		

});


app.get('/student/:name',function(req:express.Request,res:express.Response){
		console.log(req.originalUrl);
		res.render('./student');
		

});

app.use(function(err:any,req,res,next){
	console.log(err);
	res.render('./error');
})

app.get('*',function(req,res){
	res.render('./error');
})
var port:number=process.env.PORT || 3000;
var server=app.listen(port,function(){
	var listeningport:number=server.address().port;
	console.log("Server is listening at port "+listeningport);
});

