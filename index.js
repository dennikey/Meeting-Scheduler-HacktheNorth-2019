var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var admin = require('firebase-admin');
export GOOGLE_APPLICATION_CREDENTIALS="/home/user/Downloads/service-account-file.json"
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

// viewed at http://localhost:8080
app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.get('/', function(req, res) {
    res.render('/index.html');
});

app.post('/people.html', function (req, res) {
	// 1. Save data
	// 2. show people page
	console.log(req.body.firstname)
	console.log(req.body.lastname)
	console.log(req.body.email)
	console.log(req.body.phonenumber)
	console.log(req.body.facebook)
	console.log(req.body.instagram)
	console.log(req.body.wechat)
	console.log(req.body.english)
	console.log(req.body.math)
	console.log(req.body.science)
	console.log(req.body.soccer)
	console.log(req.body.basketball)
});



app.listen(8080);
