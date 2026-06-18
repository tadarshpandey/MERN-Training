

// // ^^^ this code is not so correct in logic as it menat to be....^^^

// function another(a, b){
//     function add(mul){
//         function mul(){
//             return a+b;
//         }
//         mul(add);
//         return a*b;
//     }
//     function diff(div){
//         function div(){
//             return a-b;
//         }
//         div(diff);
//         return a/b;
//     }

//     return 0;
// }

function arithmetic(a, b){
    function add(){
        console.log(a*b)
        function mul(){
            console.log(a+b)
            function diff(){
                console.log(a/b)
                function div(){
                    console.log(a-b)
                }
                div();
            }
            diff();
        }
        mul();
    }
    add();
}

console.log(arithmetic(10, 5));
