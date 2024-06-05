// function calculateCartPrice(...num1){ 
//     return num1

// }

// function calculateCartPrice(val1,val2,...num1){ 
//     return num1

// }
// console.log(calculateCartPrice(200,300,400,555,666,777));

const user = {
    username: "priyanshu",
    price: 999 //prices likhne pe ye undefined dega
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)
handleObject({
    username: "bharti",
    price: 222
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500,600]));