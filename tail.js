const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🔥🔥🔥 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }

};

const tail = function(array) {
  const tailArray = array.slice(1);
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);