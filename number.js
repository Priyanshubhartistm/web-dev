const score = 400
//console.log(score);

const balance = new Number (100)
//console.log(balance);

// console.log(balance.toString());
// console.log(balance.toFixed(5));

const otherNumber = 2358.85445

const hundreads = 100000
//console.log(hundreads.toLocaleString('en-IN'));

//++++++++++++++++++++++++++++ MATH ++++++++++++++++++++++++++++++//

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));

console.log(Math.max(4,5,6));
console.log(Math.min(4,5,6));

console.log(Math.random());
console.log((Math.random()*10) + 1);



console.log(Math.random());            // always value will be 0-1 ; example- 0.1,0.2
console.log((Math.random()*10) + 1);   // 10 se multiply krne pe value shift kar deta h..then,0.1 ko floor value dega 0.
console.log(Math.floor(Math.random()*10) + 1); // so avoid this add 1.then 1 se uppar & 9tak

const max = 10
const min = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
console.log(Math.floor(math.random() * (max - min + 1)) + max);
