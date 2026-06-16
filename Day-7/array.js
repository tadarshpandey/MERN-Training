// Array: Array is an ordered collection  which stores multiple values
// Array: Each elements has index, and it starts from zero 

// RRR

const numbers = [1,2,3,4,5,6,7]

const mixed = [1, "hello", true, null, { any: "thing"}];

console.log(numbers);

console.log(mixed);



// array declaration using array constructor...
const empty = new Array(5);

const number = new Array(1, 2, 3, 4, 5);

console.log(empty);
console.log(number);

const arr = [1,2,3,4,5,6];

console.log(arr[2]);
console.log(arr.length - 2);

// modifying array data element


arr[1]= 4;

console.log(arr)

// to input or remove element from starting of array use shift() n unshift() method for it

// to input or remove element from ending of array use push() n pop()
//example:

arr.push(5);
console.log(arr);

const last = arr.pop();

console.log(last);

arr.shift();
console.log(arr);

arr.unshift(2); // always used to give value when trying to unshift() or giving input at 0th index of array
console.log(arr);