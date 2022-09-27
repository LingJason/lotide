// eqArrays
// const eqArrays = require('./eqArrays');

// assertArraysEqual
// const assertArraysEqual = require('./assertArraysEqual');

// Middle
const middle = function(array) {
  let length = array.length;
  let newArray = [];
  let odd = Math.floor(length / 2);
  let even = odd - 1;
  if (length <= 2) {
    return [];
  } else {
    if (length % 2 === 0) {
      newArray.push(array[even], array[odd]);
    } else {
      newArray.push(array[odd]);
    }
  }
  return newArray;
};


module.exports = middle;