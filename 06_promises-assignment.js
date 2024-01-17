const { log } = require("console");


/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/;
console.log("shuru krdia h program maalik");

let meraVaada = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve("vaada nibha dia")
    }, 3000);
    setTimeout(()=>{
        reject("chaa mud gayi")
    },2000)
})
console.log(meraVaada);
meraVaada
    .then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log(error)
    })