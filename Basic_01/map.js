const map = new Map([
  ["1", 2],
  ["3", 4],
]);

for (const [key, value] of map) {
  console.log(`${key} => ${value}`); //1 => 2     3 => 4
}
