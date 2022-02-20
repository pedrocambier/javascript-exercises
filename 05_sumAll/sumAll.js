const sumAll = function(num1, num2) {
  if (typeof(num1) != "number" || typeof(num2) != "number") return 'ERROR';
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (num1 === num2) return num1;
  if(num1 >= num2) return num2 + sumAll(num2+1, num1);
  return num1+sumAll(num1+1, num2);
};

// Do not edit below this line
module.exports = sumAll;
