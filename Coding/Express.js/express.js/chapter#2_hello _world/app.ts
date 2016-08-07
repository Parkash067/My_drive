///<reference path='./typings/node/node.d.ts'/>
///<reference path='./typings/express/express.d.ts'/>

import express=require('express');

var app=express();
var port=3000;

// step#1 display hello world
/*
app.get('*', function (req,res) {
   res.send("Hello world");
   // req.end("Helo world");
});

app.listen(port,function()
{
   console.log("Your brower is responsing at port "+"http://localhost:%s"+port);
});*/

//step#2 display user name get from url

app.get('/name:user_name',function(req,res)
// /name:user_name her user_name acts like a variable when we hit a req,corresponding
// name value store in user_name
{
   res.status(200);
    res.set('Content-type','text/html');
    /* var name= req.params.user_name;
     console.log(name);*/
    res.send("<html><body><h1>"+'Hello'+req.params.user_name+"</h1></body></html>")

});
app.listen(port,function(){
    console.log("Server is listening at port:"+port);

})