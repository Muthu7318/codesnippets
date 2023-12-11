function charCount(str) {
  let obj = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }
  return obj;
}

// instead of using regex which can be a computation cost. we can this kind of methods.
function isAlphaNumeric(char) {
  let charCode = char.charCodeAt(0);

  return (
    (charCode > 47 && charCode < 58) ||
    (charCode > 64 && charCode < 91) ||
    (charCode > 96 && charCode < 123)
  );
}

console.log(charCount("Hello world"));
