const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`ππππ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`π‘π‘π‘π‘Assertion Failed: ${actual} !== ${expected}`);
  }
};

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item])
      if (results[item]) {
      results[item] += 1;
      } else {
        results[item] = 1;
      }
  }
  return results;
};
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));