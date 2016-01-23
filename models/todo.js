'use strict';

var fs = require('fs');
var path = require('path');

const DATAFILE = path.join(__dirname, '../todos.json');

var Todo = {};

Todo.write = function(todos, cb) {
  fs.writeFile(DATAFILE, JSON.stringify(todos), function(err) {
    cb(err)
  });
};

Todo.find = function(cb) {
  fs.readFile(DATAFILE, function(err, data) {
    var todos = JSON.parse(data);
    cb(todos);
  });
};

module.exports = Todo;
