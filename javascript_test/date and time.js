// DATE
let myDate = new Date()
console.log(myDate.toString());      // sat jun 01 2024 16:03:26 GMT+0530(india Standard Time)
console.log(myDate.toDateString()); // sat jun 01 2024
console.log(myDate.toISOString());  // 2024-06-01T10:33:26.862Z
console.log(myDate.toJSON());       // 2024-06-01T10:33:26.862Z
console.log(myDate.toLocaleDateString());  // 1/6/2024
console.log(myDate.toLocaleString());      // 1/6/2024, 4:03:26 pm
console.log(myDate.toLocaleTimeString());  // 4:03:26 pm

console.log(typeof myDate);

//let myCreatedDate = new Date(2024,0,23)
//let myCreatedDate = new Date(2023,0,23,5,3)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());
//let myCreatedDate = new Date("2024,01,5")

let myCreatedDate = new Date("01-15-2024")
console.log(myCreatedDate.toLocaleString());

//++++++++++++++++++ important:- exact time define-like:-polls,quiz+++++++++++++++++//

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay() +2);

`${newDate.getDay()}and the time`

newDate.toLocaleString('default',{
    weekday: "long"
})

