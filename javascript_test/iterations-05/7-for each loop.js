// const coding = ["js", "cpp", "rb", "py","java"]

// coding.forEach( function  (val) {
//     console.log(val);
// } )


// ++++++++++++++++++ ARROW FUNCTION ++++++++++++++++++++++++++
 const coding = ["ruby", "python","cpp", "js"]
// coding.forEach( (item)=> {
//     console.log(item);
// });


// +++++++++++++++ foreach ke pass item parameters ka access hota h..
// function printMe(item){
//     console.log(item);
// }
// coding .forEach(printMe);



// FOREACH ke pass or v parameters hota h..(item,index,arr)
// coding.forEach((item,index,arr)=> {
//     console.log(item,index,arr);
// })

// item, index, array ka pura access
// ^  ,    ^     ,^
// ruby 0 [ 'ruby', 'python', 'cpp', 'js' ]
// python 1 [ 'ruby', 'python', 'cpp', 'js' ]
// cpp 2 [ 'ruby', 'python', 'cpp', 'js' ]
// js 3 [ 'ruby', 'python', 'cpp', 'js' ]



const mycoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
        languageName: "cpp",
        languageFileName:"c++"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },

]
mycoding.forEach( (item)=> {
    console.log(item.languageName);
})
