// using the below snippet of code we will try to understand the high level architecture of js
function findSum(n){
    let ans = 0 ;
    for(i=0;i<=n;i++){
        ans+=i;
    }
    return ans;
}
function findSumTill100(){
    console.log(findSum(100));
}
const fs = require("fs")
fs.readFile('./03-sample.txt',"utf-8",function(err,data){      //this is just how its written utf -8 is encoding and a anonymous function explained before. data stores the data and err stores any errors 
    console.log(data)
});//async func no.1

setTimeout(findSumTill100,1000)//async function no.2

// starting with the explanation here we see 2 async fuctions, so what actually happens in js is 3 diff components a callstack then a web api and callback queue
// for instance in this particuular case we are using 'settimeout' which is not in turn a part of js out of the box
// its a part of web api which is nothing but an extended method present in browser 
// so wherever the control reaches is called in the call stack and after that in the case of an async func being a part of web api it is then processed via web api section
// and after the completion of processing of the function its sent to the callback stack where it waits for the control to get idol again.
// this concept can better be understood using a simple tool available on the internet known as latentflip.com/loupe