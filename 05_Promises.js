// promises are nothing but just syntactical sugar, they are just there to improve the readibility as 
// as the traditional way of writing async functions are ugly


const fs = require("fs");

// own async function
function shubhxmsreadfile(){
    return new Promise(function(resolve){
        fs.readFile('05_promise.txt','utf-8',function(err,data){
            resolve(data);
        });
    })
}
function onDone(data){
    console.log(data)
}
shubhxmsreadfile().then(onDone); 
// any async function we create on our own will just be a wrapper over another async function
// that we get in js out of the box 
// promise works under the hood same as callback syntax does
