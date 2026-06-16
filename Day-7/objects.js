const obj={
    name: "adarsh",
    course: "MCA",
    age: 23

};

console.log(obj);

// .notation access
console.log(obj.name);

// bracket notation
console.log(obj["course"]);


const key = "age";
console.log(obj[key]);


// update
const car ={
    brand: "toyota"
}

car.model = "innova";

car.brand = "Mahindra";
console.log(car);

// delete

delete car.brand;
console.log(car);