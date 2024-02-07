// An object is an unordered collection of key values pairs they key must be either be a string a symbol data type  where are  the values can be of any data type

// example
const obj = {
  name: "suraj singh",
  age: 301,
  "key-three": true,
  //   namedata: function () {
  //     console.log(this.name);
  //   },
};
obj.hobby = "cricket";
delete obj.hobby;

// console.log(obj.name); // 'suraj'
// console.log(obj["age"]); // 30
// console.log(obj["key-three"]); // true
// obj.namedata(); //301
// console.log(Object.keys(obj)); // [ 'name', 'age', 'key-three', 'namedata' ]
console.log(Object.values(obj)); //[ 'suraj singh', 301, true ]

// for (const [key, value] of Object.entries(obj)) {
//   console.log(`${key}: ${value}`);
// }
//   name: suraj singh
// age: 301
// key-three: true
// namedata: function () {
//     console.log(this.name);
//   }
