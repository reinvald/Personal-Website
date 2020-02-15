// set up Express and cookies
var express = require('express');
var session = require('express-session');
var routes = require('./routes.js');
var app = express();

// set up EJS
app.set('view engine', 'ejs');

var server = app.listen(3000, () => {
	console.log('Server listening on port 3000. Please open http://localhost:3000/ in your browser!');
});

// set up routes
app.get('/', routes.get_main);