const eqArrays = function (actual, expected) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    return false;
  }
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
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
const letterPositions = function (sentence) {
  const spacelessSentence = sentence.split(' ').join('');
  const results = {};
  for (let i = 0; i < spacelessSentence.length; i++) {
    if (results[spacelessSentence[i]]) {
      results[spacelessSentence[i]].push(i);
    } else {
      results[spacelessSentence[i]] = [i];
    }
  }
  return results;
};
//test
console.log(letterPositions("lighthouse in the house"));
//test
assertArraysEqual(letterPositions("hello").e, [1]);