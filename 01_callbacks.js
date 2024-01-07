// a function calling another functions
function square(n){
    let ans = n*n;
    return ans;
}
function cube(n){
    let ans = n*n*n;
    return ans;
}
function sumOfSquares(n1,n2){
    let ans1  = square(n1);
    let ans2  = square(n2);
    return ans1+ans2;
}
function sumOfCubes(n1,n2){
    let ans1  = cube(n1);
    let ans2  = cube(n2);
    return ans1+ans2;
}
// console.log(sumOfSquares(1,2))

// as we can see the above code violates the DRY (dont repeat yourself) rule its not very nice :(
//thats when callback functions come in play for now understand call back functions as functions which can pass another functions as an argument 
// the example below shows one such function

function sumOfSomething(n1,n2,fn){
    let ans1  = fn(n1);
    let ans2  = fn(n2);
    return ans1+ans2;
}
answer = sumOfSomething(2,2,cube)
console.log(answer)