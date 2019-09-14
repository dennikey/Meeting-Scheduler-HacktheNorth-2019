var express = require('express');
var app = express();
var path = require('path');

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/people', function (req, res) {
	console.log(req.params)
});

app.listen(8080, function () { console.log("Listening")});
