let arr = [2, 4, 5, 2, 4, 2, 6, 7, 5, 5, 7];
let arr2 = arr.sort();
let counter = 1;
arr2.map((item, index) => {
  if (arr2[index] === arr2[index + 1]) {
    counter = counter + 1;
  } else {
    console.log(" item  " + item + "  repeated    " + counter);

    counter = 1;
  }
});
