//function takes 2 params = newArray array and itemsToRemove array
// for each item in the itemsToRemove array, remove it from the newArray array
// Returns a new array with elements from newArray but not itemsToRemove
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


const without = function(source, itemsToRemove) {
  const newArray = source.slice(0);
  for (let i = 0; i < itemsToRemove.length; i++) {
    for (let q = 0; q < newArray.length; q++) {
      if (itemsToRemove[i] === newArray[q]) {
        newArray.splice(q, 1);
      }
    }
  } 
    return newArray;
}

console.log(without([1,2,3,2], [2]));

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
