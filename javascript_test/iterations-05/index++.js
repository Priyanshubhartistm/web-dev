// ++++++++++++  importance of (INDEX ++) +++++++++++++++++++++++
// let myArray = ["ram", "mohan", "sita" , "gita"]
// console.log(myArray.length);


// for (let index = 0; index < myArray.length; index) { // index++ (index me se plus hatne) se bht problm aa jati h..
//     const element = myArray[index];
//     console.log(element);      // condition change ni krenge to loop whi chlte rahega.run krenge to bs ram hi bs ayega (flash pe hi attack jayega) 
// }
// ctrl+c se rokna hoga..memory consume ni krega but ye glt h..isko rokna bht important h..



// ++++++++++++++++++++++++++ some small- small keyword ++++++++++++++++++++++
// break and continue

for (let index = 1; index < 20; index++)  {
    if (index == 5) {
        console.log(`detected 5`);
        break;
        
    }


    console.log(`value of 1 is ${index}`);
    
}
