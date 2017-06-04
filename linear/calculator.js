var Stack = require("./stack");
var assert = require("assert");

// Add + subtraction only, no spaces
var calculate = function(expression) {

  var storageStack = new Stack();
  var evaluationStack = new Stack();
  var operators = {
    "+": true,
    "-": false
  };

  var word = "";

  for (var i = 0; i < expression.length; i++) {

    var char = expression.charAt(i);
    if (char === "(") {
      storageStack.push(char);
      word = "";
    } else if (char === ")") {
      if (word.length) {
        storageStack.push(word);
        word = "";
      }
      var next = storageStack.pop();
      while (next !== "(") {
        evaluationStack.push(next);
        next = storageStack.pop();
      }
      var left = evaluationStack.pop();
      var operator = evaluationStack.pop();
      var right = evaluationStack.pop();
      if (operator === "+") {
        storageStack.push(parseInt(left) + parseInt(right));
      } else {
        storageStack.push(parseInt(left) - parseInt(right));
      }
    } else if (char in operators) {
      if (word.length) {
        storageStack.push(word);
      }
      storageStack.push(char);
      word = "";
    } else { // number
      word += char;
      if (i === expression.length - 1) {
        var right = word;
        var operator = storageStack.pop();
        var left = storageStack.pop();
        if (operator === "+") {
          storageStack.push(parseInt(left) + parseInt(right));
        } else {
          storageStack.push(parseInt(left) - parseInt(right));
        }
      }
    }
  }

  return storageStack.is_empty() ? 0 : storageStack.peek();

};

console.log("starting tests..");
assert.equal(calculate("(1+2)"), 3);
assert.equal(calculate("1+2"), 3);
assert.equal(calculate("(11+2)"), 13);
assert.equal(calculate("(1-2)"), -1);
assert.equal(calculate("1-2"), -1);
assert.equal(calculate("(11-20)"), -9);
assert.equal(calculate("(100-15)+15"), 100);
console.log("done with tests!");