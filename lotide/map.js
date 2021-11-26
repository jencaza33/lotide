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
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]); // => Assertion Passed
assertArraysEqual(['1', '2', '3',], [1, 2]) // => Assertion Failed


const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
/*const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}; */
const results1 = map(words, word => word[0]);
console.log(results1);
