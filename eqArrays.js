const assertEqual = require('./assertEqual');


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

module.exports = eqArrays;



// => should PASS//compare the length of the array
//loop through each array
//compare indexes
// make sure they are the same type