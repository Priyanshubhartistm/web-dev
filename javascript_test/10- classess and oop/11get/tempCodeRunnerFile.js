// class user {
//     constructor(email,password){
//         this.email;
//         this.password
//     }
//     get password(){
//         return this._password.toUpperCase()
//     }
//     set password(value){
//         this._password = value
//     }
// }
// const priyanshu = new user("p@mail.com","123")
// console.log(priyanshu.password);

class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    // get email(){
    //     return this._email.toUpperCase()
    // }
    // set email(value){
    //     this._email = value
    // }

    get password(){
        return this._password.toUpperCase()
    }