function greet(){
    console.log("life goes on");
    bye();
}

// function bye(greet){
//     console.log("Okk");
//     greet(bye);
// }

function bye(){
    console.log("bye");
}

greet(bye);
//bye(greet);