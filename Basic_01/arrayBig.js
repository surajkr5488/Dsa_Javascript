// Array big o notation

// O(1) Complexity: We consider constant space complexity when the program doesn’t contain any loop, recursive function, or call to any other functions.
// O(n) Complexity: We consider the linear space complexity when the program contains any loops.

// 1. Insert/remove for end - O(1) constant
// 2. Insert/remove for beginning  - O(n) linear
// 3. Access - O(1)
// 4. Search - O(n)
// 4. Push / pop - O(n) linear
// 5. shift / unshift - O(n) linear
// 6. forEach/map/filter/reduce- O(n) linear

// example

const arr = [1, 2, 3, 4, "suraj"];
arr.push(2);
for (const data in arr) {
  console.log(arr[data]); //1 , 2 , 3, 4,suraj,2
}
