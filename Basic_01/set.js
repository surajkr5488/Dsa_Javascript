//  a set is a data structure that can hold a collection of values. the values however  must be unioque
//  set  can contain  a mix of different data types. you can store string, boolean, number or even object all  in the same set. set are dynamically sized
// sets are iterable  they can be  used with a for of loop

// set vs Array

// => Array can contain duplicate  values whereas  set cannot
// => seaching and deleting faster in set array

// Set.add(value) <- since it adds at last index should be O(1) constant
// Set.has(value) <- since it will iterate over the set checking the existance of that value will be O(n) linear
// Set.delete(value) <- again O(1)
// Set.size <- again it has to iterate for sure so O(n) linear

// examples

const set = new Set([1, 2, 3]);
set.add(4); // add last 4 elements
set.delete(1); //Set(3) { 2, 3, 4 }

set.clear(); // clear
console.log(set.has(5)); // false and true
console.log(set); // Set(4) { 1, 2, 3, 4 }
