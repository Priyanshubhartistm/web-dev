const user = {
    username: "priyanshu",
    price: 333,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }
    

}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
//console.log(this);


// 1. +++++++++++++++= this keyword ka use function ke andr krenge to (bht sari) o/p dega ++++++++++++++++++++++++++
// function sam(){  
//     console.log(this);
//     let user = "priya"
// }
// sam()

//2. ++++++++++++++++= this keyword ke sath variable ka use ni kr skte h..(undefined)...ye jo hamra context h..ye bas obj...(yase function ke andr this use ni kar pa rhe h) ke andr hi bs kam karega o/p daga +++++++++++++++++++++++

// function chai(){
//     console.log(this.username);
// }
// chai()

// ++++++++++++++++++++++= new method to declare function +++++++++++++++++++++++++++//

// const ram = function(){
//     let username = "priyanshu"
//     console.log(this.username);
// }
// ram() 

// ++++++++++++++++++= arrow function:- bs function keyword hata denge or paranthesis (), ke bad => (equal aur arrow lagyenge): this is called arrow function  ++++++++++++++++++++++++++++++++


// const mohan = () => {
//     let username = "priyanshu"
//     console.log(this); // o/p:- {},curely paranthesis
//     console.log(this.username); // o/p:- undefined

// }
// mohan()



// +++++++++++++++++= basic arrow function ++++++++++++++++++++//
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4));

// ++++++++++++++++++++= IMPLICIT RETURN +++++++++++++++++++++//

// const addTwo = (num1,num2) =>  num1+num2
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(3,4));

// const addTwo = (num1,num2) => {username:"priyanshu"}
// console.log(addTwo(3,4)); // o/p:- undefined bcz not rape in paranthesis.

// const addTwo = (num1,num2) => ({username:"priya"})
// console.log(addTwo(3,4)); //  output :- {username:'priya'} ; also rape


// +++++++++++++++ ARRAY FUNCTION ++++++++++++++++++
const myArray = [2,3,4,5,6,7,8]
//myArray.forEach(function(){}) // this is a classic function

//myArray.forEach(() => {}) // this is a arrow function
//myArray.forEach(() => ()) // this is a also arrow function