// let myName = "priyanshu     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.priyanshu = function(){
    console.log(`priyanshu is present in all objects`);
}

Array.prototype.priyanshu = function(){
    console.log(`priyanshu says hello`);
}

// heroPower.priyanshu()
// myHeros.priyanshu()
// myHeros.hey priyanshu()
// heroPower.hey priyanshu()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"priyanshu".trueLength()
"iceTea".trueLength()