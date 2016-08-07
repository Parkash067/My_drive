/// <reference path="./typings/node/node.d.ts" />
/// <reference path="./typings/express/express.d.ts" />
var express = require('express');
var path = require('path');
var home_route = require('./routes/home');
var about_route = require('./routes/about');
var app = express();
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.set('trust proxy', true);
app.set('case sensitive routing', true);
app.set('stric routing', true);
app.set('jsonp callback name', 'cb');
app.set('x-powered-by', false);
app.set('pk', 'name');
app.use(express.static(path.join(__dirname, './public')));
app.use('/', home_route);
app.use('/', about_route);
app.use('/p2', about_route);
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningport = server.address().port;
    console.log('Sever is listening at port ' + listeningport);
});
