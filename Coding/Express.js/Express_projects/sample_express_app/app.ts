/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />

import express=require('express');
var path=require('path');
var app:express.Express=express();
var bodyParser=require('body-parser');
var session=require('express-session');
var mongoose=require('mongoose');
var dbUri="mongodb://localhost/expressapp";
mongoose.connect(dbUri);

//set configuration
app.set('trust proxy',true);
app.set('case sensitive routing',true);
app.set('strict routing',true);

var users=[
{username:"pk",password:"1",createdAt:Date.now(),bio:"He is very intelligent"},
{username:"hadi",password:"2",createdAt:Date.now(),bio:"He is very genuius"},
{username:"zain",password:"3",createdAt:Date.now(),bio:"He is very smart"},
{username:"rehan",password:"4",createdAt:Date.now(),bio:"He is very talkative"},
{username:"zeeshan",password:"5",createdAt:Date.now(),bio:"He is very goodlooking"},
]

//set view
app.set('views',path.join(__dirname,'./views'));
app.set('view engine','ejs');

//Middleware
app.use(express.static(path.join(__dirname,'./public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
  genid: function(req) {
    return (Date.now().toString()) // use UUIDs for session IDs 
  },
  secret: '123456789'
}));


var userSchema=mongoose.Schema({
    "firstname":String,
    "lastname":String,
    "email":{type:String,unique:true},
    "password":{type:String},
    "createdOn":{type:Date,default:Date.now()}
})

mongoose.model('Users',userSchema);
var User=mongoose.model('Users',userSchema);

var myDocument = new User();

mongoose.connection.on('connected',function(){
    console.log("Database connected");
});
mongoose.connection.on('error',function(err){
    console.log(err);
});
/**/

app.get('/login',function(req,res){
    res.render('login');   
})
app.get('/signup',function(req,res){
    res.render('signup'); 
     
})

app.post('/login',function(req,res){
    res.redirect('/login');
    console.log(req.body.firstname); 
    var curr_user=new User({
    "firstname":req.body.firstname,
    "lastname":req.body.lastname,
    "email":req.body.email,
    "password":req.body.password,
    "createdOn":Date.now()
    }).save(function(err,data){
        if(err){
            console.log(err);
        }
        else
        {
            console.log(data);
        }
    })
    
})

app.post('/',function(req,res){
    User.find({"email":req.body.email},function(err,data){
        for(var i=0;i<data.length;i++){
            if(data[i].email==req.body.email && data[i].password == req.body.password){
               req.session["isLogin"] = true;
               req.session["user"] = req.body.email;
               res.redirect("/");
            }
            else{
                res.send("Invalid user");
            }
        }
    })
})

app.get('/',function(req,res){
   User.find({},function(err,data){
       if(err){
           console.log(err);
       }
       else{
           res.render('homepage',{users:data,signup:"Signup?",login:"Login"});
       }
   })
  
})
 
 app.use('/:username',function(req,res,next){
    // res.send("welcome");
    var log_session=req.session["isLogin"];
    console.log(log_session)
     User.find({"email":req.params.username},function(err,data){
         if(err){
             console.log(err);
         }
         else
         {
            
             for(var i=0;i<data.length;i++){
                 var username=data[i].firstname +" "+data[i].lastname;
                 if(log_session == true)
                 {
                  res.render('userprofile',{title:username,user:username,userdata:data});
                 }
                 else
                 {
                     res.send("ERRor");
                 }
             }
         }
     })
 /* for(var i=0;i<users.length;i++){
      if(req.params.username==users[i].username)
      {
          res.render('userprofile',{title:users[i].username,user:users[i].username,userdata:JSON.stringify(users[i])});
      }
  } */ 
 })
var port=process.env.PORT||3000;
var server=app.listen(port,function(){
    var listenport=server.address().port;
    console.log("your server is listening at port: " + listenport);
})