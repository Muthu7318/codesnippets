// this has the complexity of O(n)

function maxSubArrSum2(arr, num) {
  let tempSum = 0;
  let maxSum = 0;

  for (let i = 0; i < num; i++) {
    tempSum = tempSum + arr[i];
  }

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum + arr[num] - arr[num - i];
    if (tempSum > maxSum) {
      maxSum = tempSum;
    }
  }

  return maxSum;
}

maxSubArrSum2([1, 2, 5, 2, 8, 1, 5], 4);
