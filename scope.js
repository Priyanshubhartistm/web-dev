// let a = 10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);


// ++++++++++++= this is a block scope
// if (true){
//     let a = 10
//     const b = 20
//     var c = 30
//     console.log("INER:",a);
// } 
//console.log(a);
//+++++++++++++++++++++++= if se lekr {} tak


let a = 300 //++++++++++++++++= this is a global scope , and (a) are tottaly independant.
if(true){
    let a = 10
    const b = 20
    var c = 30
    console.log("inner:",a); //inner value h.. ye (a) ki

}
console.log(a); // if ke bahar jitne v h..ooo sb global scope hai.

for (let i = 0; i < Array.length; i++){
    const element = Array(i);
}


