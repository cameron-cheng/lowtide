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

assertArraysEqual([3],[4]);