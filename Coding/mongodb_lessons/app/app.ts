/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts"/>

//step#1
/*import express=require('express');
var path=require('path');
var app:express.Express=express();

//Require moongose
var mongoose=require('mongoose');
var dbUri='mongodb://localhost/demodb';
//connection string
mongoose.connect(dbUri);

mongoose.connection.on('connected',function(){
    console.log("database connected");
});
mongoose.connection.on('error',function(err){
    console.log(err);
});
mongoose.connection.on('disconnected',function(){
    console.log("database disconnected");
});
app.get('/',function(req,res){
   res.send("Helo world"); 
});

var port:number=process.env.PORT||3000;
var server=app.listen(port,function(){
	var listenport=server.address().port;
	console.log("server is listening at port: "+listenport);
});*/

//step#2
import express=require('express');
var app:express.Express=express();

var mongoose=require('mongoose');
var dbUri='mongodb://localhost/demodb';
mongoose.connect(dbUri);


//Schema is structure of database
//Database Schema  
var userSchema=new mongoose.Schema({
    "name":String,
    "email":String,
    "createdOn":Date   
});
var User=mongoose.model('User',userSchema)
var curr_user=new User({
     "name":"Rabeea",
     "email":"Rabeea_234@gmail.com",
     "createdOn":Date.now() 
});
curr_user.save(function(err,data){
     if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

var studentSchema=new mongoose.Schema({
    "studentId":{type:String,unique:true},
    "name":String,
    "email":{type:String,unique:true},
    "createdOn":{type:Date ,default:Date.now()}
});

var student=mongoose.model('Student',studentSchema);

/*var curr_student=new student({
    "studentId":"B111010168",
    "name":"zain",
    "email":"zain1234@yahoo.com",
     "createdOn":Date.now()
});
curr_student.save(function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
})*/

mongoose.connection.on('connected',function(){
    console.log("Database connected");
})
mongoose.connection.on('Error',function(err){
    console.log(err);
})
app.get('/',function(req,res){
    var email="pk_bcs@yahoo.com"
    student.find({"email":"pk_bscs@yahoo.com"},function(err,data){
    if(err){
        console.log(err);
    }
    else{
        //var records=JSON.stringify(data);
        for(var i=0;i<data.length;i++){
            if(data[i].email==email)
            {
                 res.send("User found");
            }
            else{
                res.send("User not found");
            }
        }
       
        console.log("find:\n "+data[0].email);
    }
});
    
})

var port:number=process.env.PORT||3000;
var server=app.listen(port,function(){
    var listenport=server.address().port;
    console.log("Server is listening at port: "+listenport);
});