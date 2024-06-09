// const userEmail = [] //"priyanshustm@gmail.com"

// if (userEmail) {
//     console.log("got user mail");
// } else{
//     console.log("don't have user email");
// }

// +++++++++++++++++++ CHECK THE (some) :- FALSY VALUES +++++++++++++++++++
// 1. false, 2. 0, 3. -0, 4. Bigint(0n, zero n iske andr likha jata h), 5. ""(empty string), 6. null, 7. undefined, 8. NAN(not a number)...iske alwa sb truthy values h..


// ++++++++++++++++++++++= TRUTHY VALUES +++++++++++++++++++++
// 1. "0"(string andr o h..to truthy value); 2. 'false', 3. " "(string ke andr space de diya to oo v truthy value); 4. [],(empty array); 5. {},(empty object); 6. function(){},(empty function);

// ++++++++++++++++= CHECK ARRAY ++++++++++++++++++++++++

// if (userEmail.length === 0) {
//     console.log("Array is empty");
    
// }


// +++++++++++++++++++++ CHECK OBJECT IN TRUTHY VALUES +++++++++++++++++++++++++++

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
    
}

// ++++++++++++++++++++++++++++++IMPORTANT INTERVIEW QUESTION ++++++++++++++++++++++++++

// false == 0
// > true

// false == ''
// > true

// 0 == ''
// > true