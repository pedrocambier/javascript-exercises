const removeFromArray = function(array) {
  let args = Array.from(arguments);
  return array.filter (value => !args.includes(value));
};

// Do not edit below this line
module.exports = removeFromArray;
