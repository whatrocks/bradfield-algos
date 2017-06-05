"use strict";
/*

given a UNIX path "/foo/bar/../bar/./../bar/"
reduce to simplest: "/foo/bar/"

*/
var assert = require("assert");
var Stack = require("./stack");

var pathy = function(path) {
  var stack = new Stack();
  var word = "";
  for (var i = 0; i < path.length; i++) {
    var char = path.charAt(i);
    if (char === "/") {
      if (word.length) {
        if (word === "..") {
          stack.pop();
        } else if (word === ".") {
          // no op
        } else {
          stack.push(word);
        }
        word = "";
      }
    } else {
      word += char;
    }
  }

  var result = "/";
  while (!stack.is_empty()) {
    var next = stack.pop();
    result = next + result;
    result = "/" + result;
  }

  return result;

};

console.log(pathy("/foo/bar/../bar/./../bar/"));
