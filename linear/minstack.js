var assert = require("assert");
/*

  Design a stack that supports push, pop, top and min in O(1)

*/

var MinStack = function() {
  this.items = [];
};

MinStack.prototype.push = function(x) {
  if (!this.items.length) {
    this.items.push([x, x]);
  } else {
    var currentMin = this.items[this.items.length - 1][1];
    this.items.push([x, x < currentMin ? x : currentMin ])
  }
}

MinStack.prototype.pop = function() {
  this.items.pop();
}

MinStack.prototype.top = function() {
  return this.items[this.items.length - 1][0];
}

MinStack.prototype.getMin = function() {
  return this.items[this.items.length - 1][1]
}

console.log("starting tests..");
var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// assert.equal(minStack.getMin(), -3);
// minStack.pop();
// assert.equal(minStack.top(), 0);
// assert.equal(minStack.getMin(), -2);
minStack.push(2);
minStack.push(0);
minStack.push(3);
minStack.push(0);
assert.equal(minStack.getMin(), 0);
minStack.pop();
assert.equal(minStack.getMin(), 0);
minStack.pop();
assert.equal(minStack.getMin(), 0);
minStack.pop();
assert.equal(minStack.getMin(), 2);
console.log("tests pass!");