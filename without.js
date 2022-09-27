// const eqArrays = require('./eqArrays');


const assertArraysEqual = require('./assertArraysEqual');


const withOut = function(array1, array2) {
  let newArray = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      newArray.push(item);
    }
  }
  return newArray;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));

module.exports = withOut;