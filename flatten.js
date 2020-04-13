const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
flattenedArray = [];
  for (row of array) {
    if (Array.isArray(row)) {
      for (let i = 0; i < row.length; i++)
      flattenedArray.push(row[i]);
    } else {
      flattenedArray.push(row);
    }
  }
  console.log(flattenedArray);
  return flattenedArray;
}

flatten([1, 2, [3, 4], 5, [6]]) 