function palin (string) {
  if(string.length === 1 || string.length === 0) return true;
  if(string[0] !== string[string.length-1]) return false;
  return palin(string.substring(1,string.length-1));
}

const palindromes = function (string) {
  string = string.toLowerCase();
  let substring = (string.match(/[a-z]/g)).join("");
  return (palin(substring));
};



// Do not edit below this line
module.exports = palindromes;
