const obj ={
    name: "Adarsh",
    greet(){
        console.log("Bow down to me I'm your BigBoss");
    }
}

obj.greet();


const fnc = {
    name: "Adarsh",
    hii(){
        console.log("its life things happen");
    },
    hello(){
        console.log("choice is always yours do whatever you want but in right direction");
    },
    another(){
        console.log("yes this is another function in an object")
    },
    add(a, b){
        console.log("sum of two these "+a+" & "+b+" nums are "+ (a+b));
    }
}


fnc.hii();

fnc.hello();

fnc.another();

fnc.add(34, 54);


console.log(Object.entries(fnc));

Object.freeze(fnc);

fnc.name = "Gaurav";

console.log(fnc.name);

const obj1 = {
    name: "xyz"
}

const obj2 = {
    age: 23
}

const obj3 = Object.assign({}, obj2, obj1);

console.log(obj3);

const another = {
    name: "ABC",
    age: 23
}

Object.seal(another);


another.name = "XYZ";
another.course = "MCA";
console.log(another);