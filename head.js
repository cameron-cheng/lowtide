const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const head = function(array) {
  for (let i = 0; i < array.length; i++)
    return array[0];
}

assertEqual(head([]), undefined);
