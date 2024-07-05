const promiseFive = new Promise (function(resolve,reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve ({username: "priya", password: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    }, 1000)
});

//++++++++++ 

// async function consumePromiseFive() {
//     const response = await promiseFive
//     console.log(response);
// }

//consumePromiseFive()

// ++++++++++++++++++++ ab ise code ko try catch block me kr lete h.. +++++++++++++++++

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);

//     }catch(error){
//         console.log(error);

//     }
// }
//consumePromiseFive()

// async function getAllusers (){
//     const resolve = await fetch ('https://jsonplaceholder.typicode.com/users')
//     const data = response.json()
//     console.log(data);
// }
// getAllusers()

// ++++++++++ ab isko (try catch) me rape kar lenge ++++++++++++++++ This is try catch syntax..

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         //console.log(response);
//         const data = await response.json()   //+++++++++++ response data ye v convert hone me time lgata h..to isko v (await) krenge+++++++++++++
//         console.log(data);
//     }catch(error){
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// ++++++++++++++++++ ise function ko (.then,.catch) ke format me likhna hota to kaise likhta?
fetch('https://jsonplaceholder.typicode.com/users')
.then((Response) => {
    return Response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) => console.log(error))

