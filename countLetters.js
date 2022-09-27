// const assertEqual = require('./assertEqual');

const countLetters = function(words) {
  const result = {};
  
  for (const word of words) {
    let lowercase = word.toLowerCase();
    if (lowercase === ' ') {
      continue;
    }
    
    if (!result[lowercase]) {
      result[lowercase] = 0;
    }
    result[lowercase]++;
  }
  return result;
};

//console.log(countLetters("Jason Ling"));

module.exports = countLetters;