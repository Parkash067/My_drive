/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

import express=require('express');

 var home=express.Router();
 
 home.get('/',function(req,res){
	 console.log(req.originalUrl);
	 res.render('./home');
 })
 
 export =home;