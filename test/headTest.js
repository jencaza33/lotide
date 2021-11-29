const head = require('../head');

assertEqual(head([5,6,7]), 5); // pass
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); // pass
assertEqual(head(["one"]), "one"); // pass
assertEqual(head([]),); // undefined
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs"); //fail