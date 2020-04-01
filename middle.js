const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {

  let pass_flag = true;

  if (array1.length !== array2.length) {
    console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
    pass_flag = false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`❌❌❌ Assertion Failed: ${array1} !== ${array2}`);
        pass_flag = false;
        break;
      }
    }
  } 

  if (pass_flag) {
    console.log(`🔥🔥🔥 Assertion Passed: ${array1} === ${array2}`);
  }
}


//loop through the array to find all the elements
// For arrays with one or two elements return an empty array .pop() & .shift()
// For arrays with odd numbers, a single element should be returned .slice()?
// For arrays with even number of elements, an array should return two elements .slice()?
// To check IF an array has odd numbers or even numbers we can find out by array.length % 2 === 0

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  }
  if (array.length % 2 !== 0) {
    return [array[Math.floor(array.length / 2)]]  
  } else {
    return [array[Math.floor(array.length / 2) - 1], array[Math.floor(array.length / 2)]];
  } 
}

assertArraysEqual(middle([1]),[]); 
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); //=> [3, 4]