const { log } = console;

function A() {}

A.prototype.test = function test() {};

class B {
  constructor() {}
  test() {}
}

console.log(A.prototype.test);
console.log(A.prototype.test.prototype, 'A');
console.log(B.prototype.test);
console.log(B.prototype.test.prototype, 'B');
