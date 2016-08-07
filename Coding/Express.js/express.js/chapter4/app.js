/// <reference path="./typings/express/express.d.ts" />
/// <reference path="./typings/node/node.d.ts" />
var express = require('express');
var path = require('path');
var app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('strict routing', true);
app.set('jsonp callback name', 'cb');
//Middle ware
app.use(express.static(path.join(__dirname, './public')));
//Mounted middle ware
app.use('/admin/:username', function (req, res, next) {
    if (req.params.username == "parkash") {
        console.log("Middleware 3");
        next();
    }
    else {
        console.log();
        next("Error");
    }
});
//Custom middleware
app.use('/home', function (req, res, next) {
    console.log('Middleware 1');
    next();
});
app.use('/about', function (req, res, next) {
    console.log("Middleware 2");
    next();
});
app.use(function (err, req, res, next) {
    console.log(err);
    res.send(err);
});
app.get('/', function (req, res) {
    console.log(req.url);
    res.set('Content type', 'text/html');
    res.send('<h1>Middleware</h1>');
});
app.get('/admin/:username', function (req, res) {
    console.log(req.url);
    res.set('Content type', 'text/html');
    //res.send('<h1>'+req.url+'</h1>');
    res.send("Welcome to admin panel");
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningport = server.address().port;
    console.log("Server is listening at port " + listeningport);
});
