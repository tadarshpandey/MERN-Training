// use copy and merge method define in an array.

// 1. copy an Array
// Using Spread Operator(...)

// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// console.log(arr2);

// using slice() method

let arr1 = [1, 2, 3];

let arr2 = arr1.slice();

console.log(arr2); // [1, 2, 3]

// using Array.form()
let arr1 = [1, 2, 3];

let arr2 = Array.from(arr1);

console.log(arr2); // [1, 2, 3]



// Merge using spread opperator (...)

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];

console.log(merged);
// [1, 2, 3, 4, 5, 6]let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];

let merged = [...arr1, ...arr2];

console.log(merged);
// [1, 2, 3, 4, 5, 6]