///<reference path='./typings/tsd.d.ts'/>
var express = require('express');
var app = express();
app.get('/:username', function (req, res) {
    console.log("Request sent");
    res.set('Content-type', 'text/html');
    res.send("<html><body><h1>Welcome " + req.params.username + "</h1></body></html>");
});
app.get('*', function (req, res) {
    res.set('Content-type', 'text/html');
    res.send("<html><body><h1>404 Error </h1></body></html>");
});
var port = process.env.Port || 3000;
var server = app.listen(port, function () {
    var listeningport = server.address().port;
    console.log("Sever is on listening at port: " + listeningport);
});
