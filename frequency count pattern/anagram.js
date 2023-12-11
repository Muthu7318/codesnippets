function isAnagram(str1, str2) {
  let frequencyCtr1 = {};
  let frequencyCtr2 = {};

  for (let char of str1) {
    frequencyCtr1[char] = (frequencyCtr1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCtr2[char] = (frequencyCtr2[char] || 0) + 1;
  }
  console.log(frequencyCtr1, frequencyCtr2);
  for (let key in frequencyCtr1) {
    if (!frequencyCtr2[key]) {
      return false;
    }

    if (frequencyCtr2[key] !== frequencyCtr1[key]) {
      return false;
    }
  }
  return true;
}
