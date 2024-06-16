// // for

// // for (let i = 0; i < 10; i++) {
// //     const element = i;
// //     console.log(element);
    
// // }

// // for (let i = 0; i < array.length; i++) {
// //     const element = array[i];
    
// // }

// // 


// // +++++++++++++++++++++++ LOOP IN LOOP +++++++++++++++++++++

//  for (let i = 3; i <=10; i++) {                   // outer loop ka value (3) se start hoke (10) tak chalega..
//     console.log(`outer loop value: ${i}`);
//     for (let j = 2; j<=5; j++) {                  // inner loop , outer loop ke andr me (2) se (5) tak chalega..
//         console.log(`inner loop value ${j} and inner loop $(i)`);
         
//   }
    
// }

// outer loop value: 3
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 4
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 5
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 6
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 7
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 8
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 9
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)
// outer loop value: 10
// inner loop value 2 and inner loop $(i)
// inner loop value 3 and inner loop $(i)
// inner loop value 4 and inner loop $(i)
// inner loop value 5 and inner loop $(i)


// +++++++++++++++++++ multiplication or arithmatic operation perform ++++++++++++++++++

// for (let i = 2; i <= 3; i++) {
//     console.log(`outer loop value: ${i}`);
//     for (let j = 4; j <= 5; j++) {
//         //console.log(`inner loop value ${j} and inner loop value ${i}`);
//         console.log(i + '*' + j + '=' + i*j);
//     }
    
// }


// outer loop value: 2
// 2*4=8
// 2*5=10
// outer loop value: 3
// 3*4=12
// 3*5=15

// ++++++++++++++++++++++++++ ARRAY DECLARATION +++++++++++++++++++++++++++++


let myArray = ["ram", "mohan", "sita" , "gita"]
console.log(myArray.length);


for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
}