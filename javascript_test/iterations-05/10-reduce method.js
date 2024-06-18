// +++++++++++++++++++ simply function me isko convert krenge....
// const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accumulator,currentvalue){
//     return accumulator + currentvalue
// }, 0)
// console.log(myTotal);



// +++++++++++++++++++ Check karn h.. (accumulator & currentvalue) ke andr aa kya raha h.. +++++++++++++++++
const myNums = [1,2,3]
// const myTotal = myNums.reduce(function (accumulator,currentvalue){
//     console.log(`accumulator: ${accumulator} and currentvalue: ${currentvalue}`);
//     return accumulator + currentvalue                 // ++++++++++++++++ output :- accumulator: 0 and currentvalue: 1
    // accumulator: 1 and currentvalue: 2
    // accumulator: 3 and currentvalue: 3             //+++++++++++++++++++++++++
//}, 0)
//console.log(myTotal);   // output :- 6


// +++++++++++++++ ARROW FUNCTION
const myTotal = myNums.reduce( (accumulator,currentvalue) => accumulator + currentvalue, 0)
              
    console.log(myTotal);

//++++++++++++++++++++ SHOPPING CARD +++++++++++++++++

const SHOPPINGCART = [
    {
        itemName: "js course",
        price: 3000

    },
    {
        itemName: "c",
        price: 4000

    },
    {
        itemName: "mobile computing",
        price: 5000

    },
    {
        itemName: "pyton",
        price: 6000

    },
    {
        itemName: "data scientict",
        price: 7000

    },
]
const priceToPay = SHOPPINGCART.reduce( (accumulator,item) => accumulator + item.price, 0)
console.log(priceToPay);