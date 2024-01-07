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
setTimeout(findSumTill100,1000) // setTimeout makes this async as first the control comes to this line then doesnt wait for 1000ms
// but actually continue but after 1000ms which passed here that is 1 second the control comes back so the function Findsumtill100 executes.
console.log("JAI SHREE RAM")
// this above line is printed instead of busy waiting
// busy waiting is when we assign a costly task like add till 100000000 sqeuentially which makes the thread busy and the time is waited but no other 
// lines of code gets executed  
// async function is also used in reading files from our system as js is single threaded while the content is being loaded other lines of code can be 
// executed