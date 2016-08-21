//Using express and express router to create an API

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

//Calling customised modules

var dishes = require('dishRouter.js');
//var promotions = require('./promoRouter.js');
//var leadership = require('./leaderRouter.js');

var hostname = 'localhost';
var port = 3000;

var app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/dishes', dishes);
//app.use('/promotions', PromoRouter);
//app.use('/leadership', leaderRouter);

app.use(express.static(__dirname + '/public'));

app.listen(port, hostname, function(){
  console.log(`Server running at http://${hostname}:${port}/`);
});