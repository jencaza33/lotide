const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) return console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  else return console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
};
const eqArrays = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false;

  for (let a = 0, b = 0; a < arr1.length; b++, a++) {

    if (arr1[a] === arr2[b]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};
const letterPositions = function(sentence) {
  const newObject = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      if (newObject[character]) {
        newObject[character].push[i];
      } else {
        newObject[character] = [i];
      }

    }

  }
  return newObject;

};
console.log(assertArraysEqual(letterPositions("hello").e, [1]));