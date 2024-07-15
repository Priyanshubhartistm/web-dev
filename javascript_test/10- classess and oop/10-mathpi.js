// const descripter = Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(descripter);
// //console.log(Math.PI);
// // Math.PI = 5
// // console.log(Math.PI);

// +++++++++++ some own hard coded values ++++++++++++
const chai = {
    name: 'ginger chai',
    price: 250,
    isAvilable: true,

    orderChai: function(){
        console.log("chai nahi bani/code fat gya");
    }
        
    }


// console.log(Object.getOwnPropertyDescriptor(chai,"name"));   // +++++ name property ++++++


// ++++++(ap apni property ko change v kr skte h) object ke andr app apni property ko define v kr skte h..+++++++++
Object.defineProperty(chai, 'name',{
    writable: false,
    enumerable: true
    

})

//console.log(Object.getOwnPropertyDescriptor(chai, "name"));

// ++++++++++ ab (loop) lagake dekhte h ++++++++++++++

for (let [key, value] of Object.entries (chai)) {
    if (typeof value !== 'function') {
        
    }
    console.log(`${key} : ${value}`);
    
}