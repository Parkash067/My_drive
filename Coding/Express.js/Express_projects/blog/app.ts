/// <reference path="typings/node/node.d.ts" />
/// <reference path="typings/express/express.d.ts" />
 
 
import express=require('express');
var path=require('path');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');
//var nunjucks = require('express-nunjucks');
var app=express();

//set configuration
/*nunjucks.setup({
    autoescape: true,
    watch: true
}, app);*/
app.set('views',path.join(__dirname,'/views'));
//app.set('view engine','html');
app.set('view engine','ejs');




app.use(express.static(path.join(__dirname,'/public')));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));

var dbUri="mongodb://127.0.0.1/blogapp";
mongoose.connect(dbUri);

mongoose.connection.on('connected',function() {
    console.log('Database connected');
})
mongoose.connection.on('error',function(err) {
    console.log(err);
})

var blogSchema=mongoose.Schema({
    "name":{type:String},
   "message":{type:String },
   "status":{type:Boolean ,default:false},
   "sendOn":{type:Date,default:Date.now()}
});
 
var Blog=mongoose.model('blogs',blogSchema);

app.get('/',function(req,res){
     Blog.find({"status":true},function(err,data){
     if(err){console.log("Error in status"+ err)}
     else{
         if(data.length==0){ 
             console.log(" "+data)
             res.render('blog',{commit:false})
        }
         else{ console.log("approved commit "+data)
           res.render('blog',{commit:JSON.stringify(data)})}
   };
 })
});
app.post('/commit',function(req,res){
    console.log(req.body.message);
     console.log(req.body.username);
    var blog=new Blog({
        "name":req.body.username,
        "message":req.body.message,
        "status":false,
        "sendOn":Date.now()
    }).save(function(err,data) {
        if(err)console.log(err);
        else console.log(data);
    });
    res.send("Needs an approval of admin");

})
app.get('/admin',function(req,res){
    Blog.find({"status":false},function(err,data){
        if(err){console.log("Admin" +err)}
        else{
            res.render('admin',{data:JSON.stringify(data)});
        }      
    })
    
})
app.get('/approve/:id',function(req,res){
    console.log(req.params.id);
   Blog.update(
   { _id: req.params.id},
   { $set:
      { 
          "status":true,
      }
   }
,function (err,data) {
    if(err)console.log("Update: "+err);
    else console.log("updated: "+ data);
})
res.redirect('/admin');
});
app.get('/delete/:id',function(req,res){
    Blog.remove({"_id":req.params.id},function(err,data){
        if(err){console.log("Delete: "+err)}
        else{console.log("Delete"+data) };
    })
    res.redirect('/admin');
})
var port:number=process.env.PORT||3000;
var server=app.listen(port,function () {
    var listenport=server.address().port;
    console.log("server is listening at port: "+listenport);
})