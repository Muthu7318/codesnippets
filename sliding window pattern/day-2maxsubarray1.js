// this has the complexity of O(n^2)

function maxSubArrSum(arr, num) {
  let max = -Infinity;
  if (arr.length < num) {
    return null;
  }

  for (let i = 0; i < arr.length - num + 1; i++) {
    // i < arr.length - num + 1; this is going to show how many times we can loop,
    // depending on the num passed
    let temp = 0;

    for (let j = 0; j < num; j++) {
      temp = temp + arr[i + j];
    }

    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubArrSum([1, 2, 5, 2, 8, 1, 5], 4);
