// a function calling another functions
function square(n){
    let ans = n*n;
    return ans;
}
function sumOfSquares(n1,n2){
    let ans1  = square(n1);
    let ans2  = square(n2);
    return ans1+ans2;
}
console.log(sumOfSquares(1,2))