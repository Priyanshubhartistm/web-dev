// ES6

// class User {
//     constructor(username,email,password){
//     this.username = username;
//     this.email = email;
//     this.password
// }

// encryptPassword(){
//     return `${this.password}abc`

// }
// changeUsername(){
//     return `${this.username.toUpparcase()}`
// }
// }

// const chai = new User("chai","chai@b.com" ,"123")

// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());

//behind the scene

function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea","tea@b.com","123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());