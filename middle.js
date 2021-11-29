const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;
  
  for (let a = 0, b = 0; a < arr1.length; b++,a++) {
    
    if (arr1[a] === arr2[b]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};

const middle = (arr) => {
  const middleIndex = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 === 0) {
    const val1 = arr[middleIndex - 1];
    const val2 = arr[middleIndex];
    return [val1, val2];
  } else {
    
    return [arr[middleIndex]];
  }
  // {
  //   return middle(arr[i] + 1);
  // } else {
  //   return arr[Math.floor / 2];
  // }
};
console.log(middle([1])); // => [2]
console.log(middle([1, 2])); // => [3]