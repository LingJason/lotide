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


const without = function(array1, array2){
  let newArray = [];
  for(const item of array1){
    if(!array2.includes(item)){
      newArray.push(item)
    }
  }
  return newArray;
}
 console.log(without([1, 2, 3], [1])); // => [2, 3]
 console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"]));
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));