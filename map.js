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


const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

