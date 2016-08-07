///<reference path='./typings/node/node.d.ts'/>
///<reference path='./typings/express/express.d.ts'/>

import express=require('express');
var app:express.Express=express();

app.get('/',function(req,res)
{
	console.log("server is listening at listening mode");
	
});
app.listen(3000);	
