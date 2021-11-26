const without = function(source, itemsToRemove) {
  const newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};

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

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢✅🟢 Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed:  ${actual} !== ${expected}`);
  }

};