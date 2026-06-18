// const mypromises = new Promise((resolve, rejected) => {
//     let success = true
//     if(success){
//         resolve("data loaded") //success
//     }
//     else{
//         rejected("error occured") //error
//     }
// })

// mypromises.then(result => console.log(result)).catch(error => console.log(error))



const remark = new Promise((passsed, failed) => {
    let isstudentpassed = false
    if(isstudentpassed){
        passsed("Passed the exam")
    }
    else{
        failed("failed the exam fool student")
    }
})

remark.then(passsed => console.log(passsed)).catch(failed => console.log(failed))

