/// <reference path='./typings/node/node.d.ts' />
/// <reference path='./typings/express/express.d.ts' />
var express = require('express');
var path = require('path');
var app = express();
// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, './public')));
app.get("/ejs", function (req, res) {
    res.render("./ejs");
});
app.get("/ejs:name", function (req, res) {
    var names = [];
    names.push(req.params.name);
    console.log(names);
    res.render("./ejs-datafromserver", { title: "Hello World", names: JSON.stringify(names[0]), numbers: [1, 2, 3, 4, 5], data: JSON.stringify([{ user: "rehan" }, { user: "zia" }]) });
});
var port = process.env.PORT || 3000;
var server = app.listen(port, function () {
    var listeningPort = server.address().port;
    console.log('The server is listening on port: ' + listeningPort);
});