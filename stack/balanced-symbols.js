"use strict";
var Stack = require("./stack");
var assert = require("assert");

var SYMBOLS = {
    "{": "}",
    "[": "]",
    "<": ">",
    "(": ")"
};

var is_balanced = function(symbols) {
  var stack = new Stack();
  var symb = symbols.split("");
  for (var i = 0; i < symb.length; i++) {
    var current = symb[i];
    if (current in SYMBOLS) {
      stack.push(current);
    } else {
      var match = stack.pop();
      if (!match) {
        return false;
      }
      if (current !== SYMBOLS[match]) {
        return false;
      }
    }
  }
  return stack.is_empty() ? true : false;
}

console.log("starting tests..");
assert.equal(is_balanced("<<>"), false);
assert.equal(is_balanced("<[]>"), true);
assert.equal(is_balanced("{}"), true);
assert.equal(is_balanced("{{([][])}()}"), true);
assert.equal(is_balanced("(()]))"), false);
console.log("tests pass!");