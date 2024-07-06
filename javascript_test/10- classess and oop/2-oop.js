//++++++++++++++++ object literals ki bate ++++++++++++++++++
const user = {
    username: "priyanshu",
    loginCount: 8,
    Signedin: true,

    getUserDetails: function(){
        //console.log("got user details from database");
        //console.log(`Username: ${this.username}`);
        //console.log(this);
    }

}
// console.log(user.username);
// //console.log(user.getUserDetails());

// global context me agar this ko print kru to value (empty) ayegi ; {} q ki global context me kch ni h..

//console.log(this);

// +++++++++++++++ Constructor function krta kya h? ye sirf apko allow karta h;ki ap (ek hi object literals se multiple instances bana skte h..)
// +++++++++++ kayi bar yase situations hoti h.. jaha pe new (instance) hi chahya hota h..k

//const promiseOne = new Promise()   // +++++ new keyword kya km kar raha h..aye kha se (new keyword are constructor function)

function User(username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`welcome ${this.username}`);
    }
    
    //return this
    
}
const userOne = new User("priyanshu", 12, true)   // new keyword har bar ek new instance deta h..
const userTwo = new User("chai aur code" , 11, false)
console.log(userOne.constructor);
console.log(userTwo.constructor);

