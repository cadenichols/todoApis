'use strict';

var PORT = 4000;

var express = require('express');

var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));

app.get('/', function(req, res) {
  var html = fs.readFileSync('./index.html').toString();
  res.send(html);
});

app.use('/todos', require('./routes/todos'));

app.listen(PORT, function() {
  console.log(`server listening on port ${PORT}.`);
});
