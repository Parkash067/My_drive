/**
 * Created by pk on 10/25/2015.
 */

///<reference path='./typings/node/node.d.ts'/>
///<reference path='./typings/express/express.d.ts'/>

var express =require('express');
var  path=require('path');

var app=express();


//set

app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');
app.set('case sensitive routing',true);
app.set('strict routing',true);
app.set('trust proxy',true);
app.set('x-powered-by',false);

app.use(express.static(path.join(__dirname,'./public')));

app.get('/',function(req,res){
  res.render('./form');

});

app.get('/portfolio',function(req,res){
    var colorh=req.query.hcolor;
    var colorsec=req.query.scolor;
   res.render('./porfolio',{title:req.query.username,aim:req.query.obj,about:req.query.about,skills:req.query.skills,location:req.query.location,exp:req.query.exp,colorh:JSON.stringify(colorh),colorsec:JSON.stringify(colorsec)}) ;
});

var port:number=process.env.PORT || 3000;
var server=app.listen(port,function(){
    var listeningport:number=server.address().port;
    console.log("server is listening at port "+listeningport);
});
