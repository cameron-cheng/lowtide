const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;

