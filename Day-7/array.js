// // Array: Array is an ordered collection  which stores multiple values
// // Array: Each elements has index, and it starts from zero 

// // RRR

// const numbers = [1,2,3,4,5,6,7]

// const mixed = [1, "hello", true, null, { any: "thing"}];

// console.log(numbers);

// console.log(mixed);



// // array declaration using array constructor...
// const empty = new Array(5);

// const number = new Array(1, 2, 3, 4, 5);

// console.log(empty);
// console.log(number);

// const arr = [1,2,3,4,5,6];

// console.log(arr[2]);
// console.log(arr.length - 2);

// // modifying array data element


// arr[1]= 4;

// console.log(arr)

// // to input or remove element from starting of array use shift() n unshift() method for it

// // to input or remove element from ending of array use push() n pop()
// //example:

// arr.push(5);
// console.log(arr);

// const last = arr.pop();

// console.log(last);

// arr.shift();
// console.log(arr);

// arr.unshift(2); // always used to give value when trying to unshift() or giving input at 0th index of array
// console.log(arr);


// // another method... 


// // splice() method

// const arr2 = [1,2,3,44];

// arr2.splice(2, 2, 4, 5);
// console.log(arr2);
// //arr2.splice(2, 0, 4);
// // splice method is very used parameters that firsly takes index from there operations performed
// // and then another paramerter says at how much number of elements deleted and
// //  after that it will be given last paramter what elements gonna be pushed 

// console.log(arr2);


const nums = [1, 2, 3, 4, 5, 6];
const part = nums.slice(1,4); // from 1 to 4 and excluding 4
console.log(part);


// map

const double = nums.map(n => n*2);
console.log(double);


// filter

const events = nums.filter(n => n% 2 === 0);
console.log(events);


//reduce
const sum = nums.reduce((acc, curr) => acc + curr);
console.log(sum);


//find
const found = nums.find(n => n > 2);
console.log(found);
console.log(nums.includes(3));


//sort
const unsorted = [12,3,5,6,3,2,1];
console.log(unsorted.sort((a,b) => a - b));
