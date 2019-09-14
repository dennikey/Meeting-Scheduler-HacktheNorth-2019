var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

// viewed at http://localhost:8080
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.get('/', function(req, res) {
    res.render('/index.html');
});

app.post('/people', function (req, res) {
	// 1. Save data
	// 2. show people page
	console.log(req.body.firstname)
});

app.post('/addfriend', function (req, res) {
	console.log(req.body.firstname)
});

app.listen(8080, function () { console.log("Listening")});
