//solution 1- using reduce

function countOfCharInStr(str) {
  let resultText = "";
  const result = [...str].reduce((acc, item) => {
    acc[item] = acc[item] ? acc[item] + 1 : 1;
    return acc;
  }, {});

  for (let key in result) {
    resultText += `no of char for "${key}" is ${result[key]} \n`;
  }
  return resultText;
}

console.log(countOfCharInStr("sdff"));
