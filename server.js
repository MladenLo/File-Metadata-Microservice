//Importing modules
var express = require('express');

//Importing routes
var indexRoute = require('./app/routes/index');

var app = express();

//Set static files path
app.use(express.static(__dirname + '/public'));

//Set view directory
app.set('view engine', 'pug');
app.set('views', './app/views');

app.use('/', indexRoute);

app.listen(process.env.PORT || 8000);