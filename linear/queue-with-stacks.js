var assert = require("assert");
var Stack = require("./stack");

var Queue = function() {
  this.left = new Stack();
  this.right = new Stack();
};

Queue.prototype.enqueue = function(x) {
  this.left.push(x)
}

Queue.prototype.dequeue = function() {
  var result;
  while (this.left.size()) {
    result = this.left.pop();
    if (this.left.size()) {
      this.right.push(result);
    }
  }
  while (this.right.size()) {
    this.left.push(this.right.pop());
  }
  return result;
}

console.log("starting tests...");
var myQ = new Queue();
myQ.enqueue("a");
myQ.enqueue("b");
myQ.enqueue("c");
assert.equal(myQ.dequeue(), "a");
assert.equal(myQ.dequeue(), "b");
assert.equal(myQ.dequeue(), "c");
console.log("tests pass!");
