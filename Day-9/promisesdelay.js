function wait2sec(){
    return new Promise(resolve => {
        console.log("waiting........")
        setTimeout(() => {
            resolve("executed after 5 seconds")
            //console.log("executed after 5 seconds")
        }, 5000);
    })
}

wait2sec().then(message => console.log(message));

console.log("this wil execute before above function of settimeout runs.....");


// that is above another example of ansychronous code.....