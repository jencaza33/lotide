const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😃😃😃😃 Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`😡😡😡😡Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  let loop = Object.values(object);
  let key = (Object.keys(object));
  let output = "";
  for (let i = 0; i < loop.length; i ++) {
  
    if (loop[i] === value) {
      output = key[i];

    }
  }
  return output;
};

  
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "Outlander"
};
// let v = Object.keys(bestTVShowsByGenre)
// console.log(v)

findKeyByValue(bestTVShowsByGenre, "Outlander");

assertEqual(findKeyByValue(bestTVShowsByGenre, "Outlander"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);