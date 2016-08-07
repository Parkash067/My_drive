/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />

import express=require('express');

var about=express.Router();

about.get('/p2',function(req,res){
	
	res.render('./about');
})

export =about;