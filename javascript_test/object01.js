// 1st method of object declare (literal method) :- 
//const jsUser = {}

// one another method of creat object (it is a constructor method):-
//Object.creat

const mysym = Symbol("key1")

const jsUser = {
    name: "priyanshu",
    "full name": "priyanshu bharti",
    mysym: "mykey1",
    age: 18,
    email: "bhartipriyanshustm@gmail.com",
    location: "bihar" ,
    email: "bhartipriyanshustm@gmail.com",
    isLoggedIn: false,

    lastLogginDays:["monday","saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["name"]);
// console.log(jsUser[mysym]);

jsUser.email = "priyanshu@gmail.com"
//Object.freeze(jsUser);
jsUser.email ="priya@chatgpt"
//console.log(jsUser);

jsUser.greeting = function(){
    console.log("helo js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello,${this.name}`);
}
console.log(jsUser.greeting());
console.log(greetingTwo());