const form = document.getElementById('info-form');

function renderInfo(doc){
	let li = document.createElement('li');
	let firstname = document.createElement('span');
	let lastname =  document.createElement('span');
	
	li.setAttribute('data-id', doc.id)
}

db.collection('userinfo').get().then((snapshot) => {
	snapshot.docs.forEach(doc => {
		renderInfo(doc);
	})
})

form.addEventListener("submit", (e) => {
	e.preventDefault();
	
	firebase.firestore.collection("userinfo").add({
		firstname: firstname.value,
		lastname: lastname.value,
		email: email.value,
		facebook: facebook.value,
		instagram: instagram.value,
		wechat: wechat.value,
		english: english.selected,
		math: math.selected,
		science: science.selected,
		soccer: soccer.selected,
		basketball: basketball.selected
	})	
	
	return false;
});

/*var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');



  // ...

// viewed at http://localhost:8080
/*app.use(bodyParser.urlencoded({extended : true}));
app.set("view engine", "ejs");
app.get('/', function(req, res) {
    //res.render('/index.html');
    //res.send("hello");
    console.log('get request');
    res.sendFile('index.html',{
    	root: path.join(__dirname, './')
    })
});

/*app.post('/people.html', function (req, res) {
	// 1. Save data
	// 2. show people page
	console.log(req.body.firstname)
	console.log(req.body.lastname)
	console.log(req.body.email)
	console.log(req.body.facebook)
	console.log(req.body.instagram)
	console.log(req.body.wechat)
	console.log(req.body.english)
	console.log(req.body.math)
	console.log(req.body.science)
	console.log(req.body.soccer)
	console.log(req.body.basketball)

	//db.push();
	
});

/*
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
*/



/*app.listen(8080, () =>{
	console.log(`server running on port 8080`)
});
