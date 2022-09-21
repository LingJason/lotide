const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎👎👎 Assertion Failed:${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed:${actual} === ${expected}`);
  }
};

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function(genre, show) {
  return Object.keys(genre).find(key => genre[key] === show);
}


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);