// 1. ++++++++++++++++++++++ if statement simple use +++++++++++++++++++

// const temperature = 41
// if(temperature <50){
//     console.log("less than 50");
// }
// console.log("temperature is grater than 50"); ++++++++++= ye as it execute hoga..bcz iska (if statement) se koye lena dena ni h..


// 2. ++++++++++++++++++++++ ELSE STATEMENT ++++++++++++++++++++++
// const temperature = 41
// if(temperature<50){
//     console.log("less than 50");
// } 
// else{  // sahi bt pta lagane ke liye ({else statement} ka use karte hai)
//     console.log("temperature is grater than 50");
// }


// 3.(scope se bhar hoga .. so,as it is execute ho jayega) jo input rahega so output
//console.log("execute");


// 4. ++++++++++++++= SCOPE ke andr jo v (variable) declare hoga uska part scope tak hi rahega..bhar oo variable execution me ni milte hai..
// const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`);
// }
//console.log(`user power: ${power}`);


// 5. ++++++++++++++++++= but, VAR keyword likhne pe tb problem aati h..ye (fly) bhar v access ho raha h.. (VAR) ka scope h..completly GLOBAL, aur yase ni hona chahya..error ni aye fir v glt h..safe ni h..code h..error aana hi chahya..
// const score = 500
// if(score>200){
//     var power = "fly"
//     console.log(`user power: ${power}`);
// }


//6.++++++++++++++++= SHORT HAND +++++++++++++++++++++ this way is wrong never do this..
//const balance = 2000 // IMPLICIT SCOPE , without scope isko man lena hai..ki scope h..
//if (balance > 500) console.log("test"), // this is too much unreadable code
//console.log("test2"); // immature code bht jda


// 7. ++++++++++++++++++++= NESTING FOR MULTIPLE CONDITION +++++++++++++++
// const balance = 1000
// if(balance <600){
//     console.log("less than 600");
// }
// else if(balance<750){
//     console.log("less than 750");
// }
// else if (balance<700){
//     console.log("less than 700");
// }else{
//     console.log("less than 12000");
// }


// ++++++++++++++++ IMPORTANT :- in real life ++++++++++++++++++++
const userLoggedIn = true
const debitcard = true

const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard && 2 ==2){
    console.log("allow to buy course");
}



if (loggedInFromGoogle || loggedInFromEmail){

    console.log("userLoggedIn");
}