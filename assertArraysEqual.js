const eqArrays = require('./eqArrays.js');

const assertArrayEqual = function(actual, expected) {
  let equivalentArrays = eqArrays(actual, expected);
  if (equivalentArrays === true) {
    console.log(`ππππ Assertion Passed: ${actual} === ${expected}`);
  } else if (equivalentArrays === false) {
    console.log(`π‘π‘π‘π‘Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArrayEqual;