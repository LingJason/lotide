// eqArrays
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

// assertArraysEqual
 const assertArraysEqual = function (array1, array2) {
  if(!eqArrays(array1, array2)){
    return 'Not same';
  }
  else{
    return 'Same Same';
  }
}

// Middle
const middle = function(array) {
  let length = array.length;
  let newArray = []
  let odd = Math.floor(length / 2);
  let even = odd - 1;
  if (length <= 2) {
    return [];
  } else {
    if (length % 2 === 0) {
      newArray.push(array[even], array[odd]);
    } else {
      newArray.push(array[odd]);
    }
  }
  return newArray;
}

// Test
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3])
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]