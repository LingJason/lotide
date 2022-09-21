const eqArrays = function (array1, array2) {
  if(array1.length === array2.length){
  for(let i = 0; i < array1.length; i++){
    if(array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
  } else {
    return false;
  }
}


 const assertArraysEqual = function (array1, array2) {
  if(!eqArrays(array1, array2)){
    return 'Not same';
  }
  else{
    return 'Same Same';
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i];
    if(char === ' ') {
      continue
    }
    
    if (!results[char]) {
      results[char] = [];
    }

    results[char].push(i)
  }
  return results;
};

console.log(letterPositions("hello"));