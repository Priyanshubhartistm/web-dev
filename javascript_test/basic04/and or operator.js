// nullish coalescing operator (??):  // This is a new operator 
// two keyword 1=null; 2= undefined

// let val1;
// val1 = 5 ?? 10
// console.log(val1); // output:- 5

// 1. ++++++++++++++++++ NULL +++++++++++++++++++++++
// let val1;
//val1 = null ?? 10


// 2. ++++++++++++++++++++ undefined +++++++++++++++++++
// let val1;
// val1 = undefined ?? 20
// console.log(val1);

// 3. +++++++++++++++++++
// let val1;
// val1 = null ?? 10?? 20
// console.log(val1);

let val1;
val1 = undefined ?? 10?? 20
console.log(val1);

// +++++++++++++++ TERNIARY OPERATOR +++++++++++++++++++ one question marks(?)

// condition ? true : false

// const iceteaprice = 100
// iceteaprice >= 20 ? console.log("less than 80"): console.log("more than 80");