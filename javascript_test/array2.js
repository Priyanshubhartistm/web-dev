// const super_heroes = ["ironman","shaktiman","dimchik"]
// const dcheroes = ["superman","balveer","spiderman","ironman"]

// super_heroes.push(dcheroes)
// console.log(super_heroes);

const animal = ["fish","goat","ox"]
const fruit = ["mango","orange","litchi"]
// animal.push(fruit)

// console.log(animal);

//++++++++++++= SPREAD OPERATION =++++++++++++++++++++//

const all_new_animal = [...animal,...fruit,]
console.log(all_new_animal);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("priyanshu"));
console.log(Array.from("bhati"))
console.log(Array.from({name: "priyanshu"}));//intersting

let score1 = 100
let score2 = 200

let score3 = 300
console.log(Array.of(score1,score2,score3));



