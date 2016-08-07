///<reference path='./typings/express/express.d.ts'/>
///<reference path='./typings/node/node.d.ts'/>

import express =require('express');
import path= require('path');


var app:express.Express=express();


var book = {name: 'Practical Node.js',
  publisher: 'Apress',
  keywords: 'node.js express.js mongodb websocket oauth',
  discount: 'PNJS15'
}
//configuration of application

app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.set('trust proxy', true);
app.set('jsonp callback name', 'cb');
app.set('json replacer', function(key, value){
  if (key === 'discount')
    return undefined;
  else
    return value;
});
app.set('json spaces', 4);

app.set('case sensitive routing', true);
app.set('strict routing', true);

app.set('subdomain offset', 3);


app.get('/jsonp', function(request, response){
  response.jsonp(book);
})
app.get('/json', function(request, response){
  response.send(book);
})
app.get('/users', function(request, response){
  response.send('users');
})
app.get('/users/', function(request, response){
  response.send('users/');
})
app.get('*', function(request, response){
  response.send('Pro Express.js Configurations');
})





var port:number=process.env.PORT || 3000;
var server=app.listen(port,function(){
	var listeningport:number=server.address().port;
	console.log("Sever is Listening at port "+listeningport);
	
})