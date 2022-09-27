const eqArrays = require('./eqArrays');
const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    return 'Not same';
  } else {
    return 'Same Same';
  }
};

module.exports = assertArraysEqual;