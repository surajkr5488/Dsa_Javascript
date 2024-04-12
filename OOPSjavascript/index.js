function first() {
  console.log("first");
  second();
}
function second() {
  console.log("second");
  third();
}

function third() {
  console.log("third");
  first();
}

first();

let x = 20;
let y = 40;
function first(a, b) {
  let sum = a + b;
  return sum;
}
let sum = first(11, 44);
console.log("ss", sum);
let sums = first(x, y);
console.log("ss", sums);
