///<reference path='./typings/node/node.d.ts'/>
///<reference path='./typings/express/express.d.ts'/>
var express = require('express');
var app = express();
app.get('/', function (req, res) {
    console.log("server is listening at listening mode");
});
app.listen(3000);
