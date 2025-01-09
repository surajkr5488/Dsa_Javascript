// const ArrayData = reverseString(data, "");
// const String = reverseString(ArrayData, " ");

// function reverseString(data, options) {
//   return data.split(options).reverse(options).join(options);
// }
// console.log(String);

function String(data, options) {
  let dataArray = "";
  for (let i = data.length - 1; i >= 0; i--) {
    dataArray += data[i];
  }
  return dataArray.split(options).reverse().join(options);
}

const data = "hey suraj How are you";
const dataArray = String(data, " ");
console.log(dataArray, "fhjfhjhf");
