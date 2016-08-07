/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./typings/node/node.d.ts" />
import express=require('express');
var Peer=require('simple-peer');
var path=require('path');
var app=express();
var peer=new Peer({
    initiator:location.hash==='#init',
    trickle:false,
});
 peer.on('signal',function(data) {
     document.getElementById('yourid')['value']=JSON.stringify(data);
 });
 
 document.getElementById('connect').addEventListener('click',function(){
    var otherid=JSON.parse(document.getElementById('otherid')['value']);
    peer.signal(otherid); 
 });
 
 document.getElementById('send').addEventListener('click',function(){
    var yourmessage=document.getElementById('yourmessage')['value'];
    peer.send(yourmessage); 
 });
 
 peer.on('data',function(data) {
     document.getElementById('messages').textContent+= data +'\n';
 });
 
 /*app.set('views',path.join(__dirname,'./views'));
 app.set('view engine','ejs');
 
 app.use(express.static(path.join(__dirname,'./public')));
 
 app.get('/',function(req,res){
     res.render('index.html');
     
 })
 
 var port:number=process.env.PORT||3000;
 var server=app.listen(port,function(){
  var listeningPort=server.address().port;
  console.log("server is listen at port: "+listeningPort);   
 })*/