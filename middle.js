const assertArrayEqual = require('./assertArraysEqual.js');

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
};

module.exports = middle;