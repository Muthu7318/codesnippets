function areThereDuplicates(...items) {
  let lookup = {};

  for (let char of items) {
    lookup[char] = (lookup[char] || 0) + 1;
  }

  for (let char in lookup) {
    if (lookup[char] > 1) {
      return true;
    }
  }
  return false;
}

areThereDuplicates(1, 2, 3);
