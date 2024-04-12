// let myarray = [10, -12, -45, 55, 78, 58, -89, 11, -59, 0];

// //result [-12,-45,-89,-59,10,55,78,58,11]

// //negative number should be in left and positive nummber in right

// function array(arr) {
//   let newArr = [];
//   let negnum = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       newArr.push(arr[i]);
//     }
//     if (arr[i] > 0) {
//       negnum.push(arr[i]);
//     }
//   }

//   let finalarr = [...newArr, ...negnum];

//   return finalarr;
// }

// let a = array(myarray);
// console.log(a);

let myarray = [10, -12, -45, 55, 78, 58, -89, 11, -59, 0];
let leftIndex = 0;
let rightIndex = myarray.length - 1;

for (let i = 0; i < myarray.length; i++) {
  if (myarray[i] < 0) {
    [myarray[i], myarray[leftIndex]] = [myarray[leftIndex], myarray[i]];
    leftIndex++;
  }
}

console.log(myarray);
