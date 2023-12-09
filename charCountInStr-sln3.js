//using simple if else

let string = "Muthu";
let obj = {};
for (let s of string) {
  if (!obj[s]) {
    obj[s] = 1;
  } else {
    obj[s] = obj[s] + 1;
  }
}

console.log(obj);
