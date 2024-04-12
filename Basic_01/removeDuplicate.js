let data = [21, 21, 21, 22, 122, 22, 1, 55, 26, 23];
let uniquArray = uniqueArray(data);
console.log(uniquArray);

function uniqueArray(Array) {
  let unique = [];
  for (let i = 0; i < Array.length; i++) {
    if (unique.indexOf(Array[i]) === -1) {
      console.log(unique.indexOf(Array[i]), "data==");
      unique.push(Array[i]);
    }
  }
  return unique;
}
