const inspect = require('util').inspect; // <= add this line

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
const eqObjects = function (object1, object2) {
  const listOfKeys1 = Object.keys(object1);
  const listOfKeys2 = Object.keys(object2);
  if (listOfKeys1.length !== listOfKeys2.length) {
    return false;
  }
  for (key of listOfKeys1) {
    const value1 = object1[key]
    const value2 = object2[key]
    if (Array.isArray(value1) || Array.isArray(value2)) {
      if (!eqArrays(value1, value2)) {
        return false
      }
    } else {
      if (value1 !== value2) {
        return false;
      }
    }
  }
  return true;
}
const assertObjectsEqual = function (actual, expected) {
  if (eqObjects(actual, expected)) {
    console.log(`🔥🔥🔥 Asssertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};
///test
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { d: 1, e: 2, f: 3 })
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { b: 2, a: 1, c: 3 })