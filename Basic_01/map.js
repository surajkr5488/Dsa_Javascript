const map = new Map([
  ["1", 2],
  ["3", 4],
]);

for (const [key, value] of map) {
  console.log(`${key} => ${value}`); //1 => 2     3 => 4
}

// calculation with multiply  2
const data = [2, 12, 52, 78, 16];
const doubledata = data.map(function (item) {
  return item * 2;
});
console.log(doubledata);

// sort data and reverse the array

data.sort(function (a, b) {
  return a - b;
});
console.log(data);
