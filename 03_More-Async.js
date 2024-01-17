// trying to dive deeper into async and how it actually works 
// a few another out of the box js functions which are async are .read function which reads files from local FileSystem and also fetch which we'll
// learn after wards.
// Anonymous function are thos functions which dont require a name as they wont be specefically called ever they are usually sent as an argument and 
// same is shown below in the given example.
// so in this program we are trying to learn that even if the read function is done it only gets executed ones the control gets idol again
const fs = require("fs")
fs.readFile('./03-sample.txt',"utf-8",function(err,data){      //this is just how its written utf -8 is encoding and a anonymous function explained above. data stores the data and err stores any errors 
    console.log(data)
});
console.log("helloworld") // first this line will be printed as readfile is a async function and our control line will shift here instead of waiting for the file
// to be accessed and read.
//  if we give another costly task here the control will first complete that task instead of consoling the data of the text file as the control needs to 
// be idol before running a async functions even if its ready.  
// for instance 
let a = 0
for(i=0;i<=10000;i++){
    a++;
}
console.log("hi there:)")