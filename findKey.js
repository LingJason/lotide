const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎👎👎 Assertion Failed:${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed:${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

console.log(findKey({
  "BlueHill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"