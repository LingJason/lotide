// const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!assertObjectsEqual(actual, expected)) {
    console.log(`Assertation Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`Assertation Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;