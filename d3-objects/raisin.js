const raisinAlarm = function(cookie) {
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] !== "🍫") {
      return "Raisin Alert!";
  }
} return "All Good!";
};

console.log(raisinAlarm(["🍫", "🍫", "🍇", "🍫"]));
console.log(raisinAlarm(["🍫", "🍇", "🍫", "🍫", "🍇"]));
console.log(raisinAlarm(["🍫", "🍫", "🍫"]));

//create a loop through the array
//create the if statements