//const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "12345"
tinderUser.name = "priya"
tinderUser.isloggedin = "false"
//console.log(tinderUser);
const regularuser = {
    email:"bharti@mail.com",
    fullname: {
        userfullname: {
    firstname: "priyanshu",
    lastname: "bharti"
   }
}
}
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj4 = {5:"a",6:"b"}
//const obj3 = {obj1,obj2}
//const obj3 = object.assign({},obj1,obj2,obj4)
const obj3 = {...obj1,...obj2}
console.log(obj3);


const users = [
    {
        id : 1,
        email: "bharti@mail.com",

        },
    {

    },
    {

    },
]
users[1].emailx
console.log(tinderUser);

console.log(Object.keys(tinderUser));