// array
const myArray = [0,1,2,3,4,5,]
// const myheros = ["shaktiman","ram","mohan","sohan"]
// console.log(myArray[3]);

//const myarray1 = new Array(1,2,3,4,5)
//console.log(myarray1[2]);

//ARRAY METHODS

// myArray.push(6)
// myArray.push(7)
// myArray.pop() //this is remove last value
//myArray.unshift(3)
//myArray.shift()

// +++++++++++++++++++some operations++++++++++++++++++++//

// console.log(myArray.includes(9));
// console.log(myArray.indexOf(3));

//const newArray = myArray.join()
// console.log(myArray);
// console.log(typeof newArray);

//+++++++++++++++++++++ slice,splice+++++++++++++//

console.log("A",myArray);

const myn1 = myArray.slice(1,3)

console.log(myn1);
console.log("b",myArray);

const myn2 = myArray.splice(1,3)

console.log(myn2);
console.log("c",myArray);
