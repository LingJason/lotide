//middleTest.js

// eqArrays
// const eqArrays = require('../eqArrays');

// assertArraysEqual
//  const assertArraysEqual = require('../assertArraysEqual');

// const middle = require('../middle');

// Test
// console.log(middle([1])); // => []
// console.log(middle([1, 2])); // => []
// console.log(middle([1, 2, 3])); // => [2]
// console.log(middle([1, 2, 3, 4, 5])); // => [3])
// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("it should return 2", ()=> {
    assert.deepEqual(middle([1,2,3]), [2]);
  });
});