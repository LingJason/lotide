const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`👎👎👎 Assertion Failed:${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed:${actual} === ${expected}`);
  }
};

const countLetters = function(words) {
  const result = {};
  for (const word of words) {
    let lowercase = word.toLowerCase();
    if(lowercase !== ' '){
    if(result[lowercase]) {
      result[lowercase] += 1;
    } else {
      result[lowercase] = 1;
    }
    }
  }
  return result;
}

console.log(countLetters("Jason Ling"));