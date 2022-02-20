const repeatString = function(string, num) {
  if(!!string || !!num) return '';
  if(num<0) return 'ERROR';
  let resultString = '';
  for (let i=0; i<num;i++) {
    resultString += string;
  }
  return resultString;
};

// Do not edit below this line
module.exports = repeatString;
