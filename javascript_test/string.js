// const name = "Priyanshu"
// const repoCount = 50

// const gameName = new String("Priyanshu")

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt("2"));
// console.log(gameName.indexOf('r'));
// console.log(gameName.toLowerCase());

// const newString = gameName.substring(0,5)
// console.log(newString);

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);
const animals = ['ant','bison','camel','duck','elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
