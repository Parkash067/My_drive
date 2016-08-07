/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/express/express.d.ts" />
var express = require('express');
var home = express.Router();
home.get('/', function (req, res) {
    console.log(req.originalUrl);
    res.render('./home');
});
module.exports = home;
