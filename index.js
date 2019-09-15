var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var admin = require('firebase-admin');
var firebase = require('firebase');

var config = {
    apiKey: "AIzaSyDjkhHIpFL7PSBlTte09ywFCtZnspNooUQ",
    authDomain: "uwloo-connect.firebaseapp.com",
    databaseURL: "https://uwloo-connect.firebaseio.com",
    projectId: "uwloo-connect",
    storageBucket: "uwloo-connect.appspot.com",
    messagingSenderId: "491763611401"
};

firebase.initializeApp(config);
var db = firebase.firestore();

app.use(express.static(__dirname));
app.use(bodyParser());

  // ...
// viewed at http://localhost:8080
// app.set("view engine", "ejs");
app.get('/', function(req, res) {
	res.render('./index.html')
});

app.post('/userinfo', function (req, res) {
	// 1. Save data
	// 2. show people page
	console.log(req.body)
	db.collection("userinfo").add({
    	firstname: req.body.firstname,
    	lastname: req.body.lastname,
    	email: req.body.email,
    	facebook: req.body.facebook,
    	instagram: req.body.instagram,
    	wechat: req.body.wechat,
   		subjects: req.body.subjects,
    	sports: req.body.sports
	})
	.then(function(docRef) {
    	console.log("Document written with ID: ", docRef.id);
	})
	.catch(function(error) {
    	console.error("Error adding document: ", error);
	});
	// console.log(req.body.lastname)
	// console.log(req.body.email)
	// console.log(req.body.phonenumber)
	// console.log(req.body.facebook)
	// console.log(req.body.instagram)
	// console.log(req.body.wechat)
	// console.log(req.body.science)
	// console.log(req.body.soccer)
	// console.log(req.body.basketball)
	//db.push();
	res.end();
});

/*
function addMockData() {
	db.collection("userinfo").add({
    firstname: "Hey",
    lastname: "Lovelace",
    email: "dsfadsf",
    facebook: "fdsaf",
    instagram: "fdsaf",
    wechat: "fdsafas",
    english: false,
    math: true,
    science: false,
    soccer: true,
    basketball: true
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

}
*/


app.listen(8080, () =>{
	console.log(`server running on port 8080`)
});

