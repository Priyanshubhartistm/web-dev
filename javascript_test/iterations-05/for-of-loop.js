// for of loop

// ["" ,""]
//[{} ,  {}]

//++++++++++++++++++++++++ array +++++++++++++++++++++++
// const arr = [1,2,3,4,5]

// for (const num of arr) {
//     //console.log(num);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
// }


// ++++++++++++++++++++++ string keyword +++++++++++++++++++++++++++
// const grettings = "hello world!"
// for (const greet of grettings) {
//     console.log(`each char is ${greet}`);
//     break
    
// }


// ++++++++++++++++++++++++++ break keyword +++++++++++++++++++++++++++++

// const greetings = "hello  priyanshu"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
//     break
// }


// ++++++++++++++++++= MAPS (as it is array but thoda s iterations baigara)+++++++++++++++++++++++++++++++

// const map = new Map()
// map.set('in',"india")      // or jise order me apne enter kiya h..use order ke andr hi rhti h..
// map.set ('us', "united state of america")
// map.set ('fr', "france")
// map.set('in',"india")      // india iske andr ni jayega (two entries ni h..,map unique value ke liye jane jate h..)
// console.log(map);



// +++++++++++++++++++++++  (FOROF LOOP IN MAP)forof loop me maap ++++++++++++++++++

// const map = new Map()
// map.set('in', "india")
// map.set ('us', "united state of america")
// map.set ('fr', "france")
// map.set('in', "india")
// console.log(map);

// for (const [key, value] of map) {       // key,value dono ko alag alag print kara skte h..
//     console.log(key, ':-', value);
// }



// ++++++++++++++++++++++++++++= (FOR OF LOOP IN OBJECT) object me forof loop

const myObject = {
    'game1': 'nfs',
    'game2': 'spiderman'

}
 for (const [key, value] of myObject) {
    console.log(key, ':-', value);
 }