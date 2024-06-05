// function sayMyname(){
// console.log("p");
// console.log("r");
// console.log("i");
// console.log("y");
// console.log("a");
// }
//sayMyname()

function addTwoNumber(number1,number2){

    let result = number1 + number2
    //console.log("priyanshu");
    //return result
    return number1 + number2
}

const result = addTwoNumber(3,5)
console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return

    }
    return `$(username) just logged in`
}
console.log(loginUserMessage("priyanshu"))
console.log(loginUserMessage());