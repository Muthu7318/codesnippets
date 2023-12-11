/*
the function accepts two arrays. the function should return true if every value in the array has its corresponding value squared
 in the second array. the frequency of values must be the same
*/

/*
so this code has complexity of O(n) which is good. here we make three for loop which is ok.

eg: if we have 1000 in arr1 and 1000 items in arr2. doing two seperate for loop we are making 2000 iteration. which is ok.
but if we do nested arrays. we would be doing 1000*1000 iterations. 10,00,000 iterations will be happening which is bad.
*/

function sameSquared(arr1, arr2) {
  let frequencyCtr1 = {};
  let frequencyCtr2 = {};

  for (let item of arr1) {
    frequencyCtr1[item] = (frequencyCtr1[item] || 0) + 1;
  } // one loop

  for (let item of arr2) {
    frequencyCtr2[item] = (frequencyCtr2[item] || 0) + 1;
  } // one loop
  console.log(frequencyCtr1, frequencyCtr2);

  for (let item in frequencyCtr1) {
    if (!(item ** 2 in frequencyCtr2)) {
      // this is not a loop. we are accesing the item using its key
      return false;
    }
    if (!(frequencyCtr1[item] === frequencyCtr2[item ** 2])) {
      // this is not a loop. we are accesing the item using its key
      return false;
    }
  } // one loop
  return true;
}

sameSquared([1, 2, 1], [1, 4, 4]);
