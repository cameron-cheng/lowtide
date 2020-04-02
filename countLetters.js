const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
}
const countLetters = function(string) {
  const result = {};
  let spacelessString = string.split(' ').join('');
  for (letter of spacelessString) {
    if (result[letter]) {
      result[letter] += 1;
    } else {
      result[letter] = 1;
    }
  } 
  return result; 
}
 countLetters("lighthouse in the house" )