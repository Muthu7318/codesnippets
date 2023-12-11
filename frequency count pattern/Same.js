/*
the function accepts two arrays. the function should return true if every value in the array has its corresponding value squared
 in the second array. the frequency of values must be the same
*/

// this is not the best solution. the complexity of this is O(n^2).
// for loop and then inside it we are checking indexof which is also a loop only

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    // loop 1
    let correctIndex = arr2.indexOf(arr1[i] ** 2); // loop 2 using indexof; so loop inside loop which leads to O(n^2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
}

same([1, 2, 1], [4, 4, 1]);
