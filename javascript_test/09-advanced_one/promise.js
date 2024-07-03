const promisOne = new Promise(function(resolve,reject){
    // do async task
    // DB calla :- db call,inject,recive,connect.
    // CRYPTOGRAPHY :- CRYPTO RELATED task
    // NETWORK :- N/W CALL, nw related problem.

    setTimeout(function(){
        console.log('asyenc task is complete');
        resolve()
    },1000)
})

promisOne.then(function(){
    console.log("promise consumed");
})

// without variable me hold kiye promise banyenge
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2');
        resolve()

    },1000)
}).then (function(){
    console.log("async 2 resolved");
})

// ab 3no. promise banyenge
const PromiseThree = new Promise(function(resolve, reject){
    setTimeout(function()  {
        resolve({username:"criyanshu", email: "bharti@gmail.com"})
        
    }, 1000);
})

PromiseThree.then(function(user){
    console.log(user);
})

// ++++++++++++++++++++++ promise 4 banyenge (REJECT)++++++++++++++++++++++++
const promiseFour = new Promise (function (resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "priyanshu", password: "123"})
        } else {
            reject('error: something went wrong')
        }
        
    }, 1000)
    
})

// const username = PromiseFour.then((user) =>{
//     console.log(user);
//     return user.username
// })
// console.log(username); 

 //++++++ ye process wrong h..data nikalne ke liye +++++++++++

// +++++++++++++++ .then() ke liye chaining kr skte h..++++++++++++++++++
promiseFour
.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("the promise is either resolved or rejectd"))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/Priyanshubhartistm')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.