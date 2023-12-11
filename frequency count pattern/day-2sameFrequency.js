function sameFrequency(num1, num2) {
  // convert to string
  // length not same then return false
  let val1 = String(num1);
  let val2 = String(num2);

  let lookup = {};

  if (val1.length !== val2.length) return false;

  for (let char of val1) {
    lookup[char] = (lookup[char] || 0) + 1;
  }
  console.log(lookup);
  for (let char of val2) {
    if (!(char in lookup)) return false;

    if (!lookup[char]) {
      return false;
    }
    lookup[char] = lookup[char] - 1;
  }
  return true;
}

sameFrequency(22, 222);
