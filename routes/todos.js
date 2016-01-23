'use strict';

var express = require('express');
var router = express.Router();

var Todo = require('../models/todo');

router.get('/', function(req, res) {
  Todo.find(function(todos) {
    res.send(todos);
  });
});

router.post('/', function(req, res) {
  var newTodo = req.body;
  newTodo.isComplete = false;
  Todo.find(function(todos) {
    todos.push(newTodo);
    Todo.write(todos, function(err){
      res.send(todos);
    });
  });
});

router.delete('/:index', function(req, res) {
  var index = req.params.index;
  Todo.find(function(todos){
    todos.splice(index, 1);
    Todo.write(todos, function(err){
      res.send(todos);
    });
  });
});

router.put('/:index', function(req, res) {
  var index = req.params.index;
  Todo.find(function(todos) {
    todos[index].isComplete = !todos[index].isComplete; //toggling
    Todo.write(todos, function(err){
      res.send(todos);
    });
  });
});

module.exports = router;
