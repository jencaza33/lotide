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

module.exports = eqArrays;