// solution 1 has complexity of O(n^2). because it has nested loop

function sumzero(arr) {
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// solution 2 has complexity of O(n). there is only 1 loop.
function sumZero2(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else {
      if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
}
sumZero2([-2, -1, 0, 1]);
