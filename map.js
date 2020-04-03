
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};
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

const words = ["ground", "control", "to", "major", "tom"];
const nums = [200, 300, 400];
const nums2 = [30, 20, 10]

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}




//tests
assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(nums, num => num * 10), [2000, 3000, 4000]);
assertArraysEqual(map(nums2, num => num - 5), [25, 15, 5]);

