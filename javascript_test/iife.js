// +++++++++++++++ imediately invoked function expression (iife).. it means jldi function execute ho jaye.

//1. function sohan(){
//     console.log(`DB CONNECTED`);
// }
// sohan()

//++++++++++++++++++++++iife likhenge y (immediately invoked krte h.function ko); yaha pe function ko parenthese me rap kar denge..

//2. (function ram (){
//     console.log(`DB CONNECTED`);
// }
// )()

//+++++++++++++++++++++++syntax for iife +++++++++++++++++++++++++++++
// 3.(i):-  () it means function defination , (ii):- ()it means execution call of function.

//+++++++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++
// ( () => {
//     console.log(`DB connected `);
// })() ;

// ( () =>{
//     console.log(`db connected two`);
// } )()

// ( () =>{
//     console.log(`db connected`);
// })()

//++++++++++++++++++++++ UNAMED IIFE +++++++++++++++++++ yaha pe (name) hai
// ((name) => {
//     console.log(`db connected ${name}`);
// })
// ('priya')

//+++++++++++++++++++ NAMED IIFE +++++++++++++++++++++ yaha pe (priya) hai

// (function priya(){
//     console.log(`db connected`);
// })
// ()

// +++++++++++++++++++++++ TWO IIFE +++++++++++++++++++++++++// yaha pe bas (;) semi colon ki galti hoti hai..

(function priya(){
    console.log(`DB connected`);
})
();

( (name) => {
    console.log(`db connected ${name}`);
})
("priyanshu")