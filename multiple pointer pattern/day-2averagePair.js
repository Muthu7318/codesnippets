function averagePair(arr, avg) {
  if (arr.length === 0) return false;
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let avgCalc = (arr[left] + arr[right]) / 2;
    if (avgCalc === avg) {
      return true;
    } else {
      if (avgCalc > avg) {
        right--;
      } else {
        left++;
      }
    }
  }
  return false;
}
