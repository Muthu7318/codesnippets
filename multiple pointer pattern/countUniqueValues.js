function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      // if the values are different increase i and bring item in jth position to ith position.
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1; // "i" would have increased the number of times, the difference has happend. if there is no difference [1,1,1] then return 0+1.
}

countUniqueValues([1, 2, 3, 3]);
