const mypromises = new Promise((resolve, rejected) => {
    let success = true
    if(success){
        resolve("data loaded") //success
    }
    else{
        rejected("error occured") //error
    }
})