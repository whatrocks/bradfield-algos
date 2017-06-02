"use strict";
var Stack = require('./stack');
var assert = require('assert');

var is_balanced = function(parenthesis) {
  var OPENING = "(";
  var stack = new Stack();
  var paren = parenthesis.split('');
  for (var i = 0; i < paren.length; i++) {
    if (paren[i] === OPENING) {
      stack.push(paren[i]);
    } else {
      var match = stack.pop();
      if (!match) {
        return false;
      }
    }
  }
  return stack.is_empty() ? true : false;
}

console.log("starting tests..");
assert.equal(is_balanced("(((()))"), false);
assert.equal(is_balanced("(((())))"), true);
assert.equal(is_balanced("(((()))))))))"), false);
console.log("tests pass!");