const findKeyByValue = function(object, value) {
  return object.keys(object).find(key =>
    object[key] === value);
};
