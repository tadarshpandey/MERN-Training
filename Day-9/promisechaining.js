function add(num){
    return new Promise(resolve => resolve(num + 5))

}

Promise.resolve(9).then(add).then(add).then( result => console.log(result))



function wait(msg, ms){
    return new Promise(resolve => setTimeout(() => {
        resolve(msg)
    }, ms))
}

async function run() {
    console.log(("start"))
    const result = await wait("done waiting", 5000)
    console.log(result)
    console.log("end")
    
}

run();