var express = require('express');
// var multer = require('multer');
var bodyParser = require('body-parser');
// var fs = require('fs');
// var request = require('request');
// var querystring = require('querystring');
// var requireUncached = require('require-uncached');
// var debug = require('debug')('server:');

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.get(/^\/[^\/]*\.html/, function (req, res) {
    console.log(req.path);
    res.redirect(req.path + '.html');
});

app.get(/^\/[^\/]*\.json/, function (req, res) {
    console.log(req.path);
    res.redirect(req.path + '.json');
});

var port = 8559;
app.listen(port);
