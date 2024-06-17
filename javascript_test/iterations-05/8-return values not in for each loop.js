//RETURN VALUES NOT ALLOW IN FOR EACH LOOP
// const coding = ["js","python","java","ruby"]

// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item                              // for each not allow any return values
// })




// console.log(values);


// const myNums = [1,2,,3,4,5,6,7,8,9,10]
// const newNums = myNums.filter( (num) => { 
//    return num> 4                            // without return value ye [], empty array dega
// })
// console.log(newNums);


const books = [
   {title: 'Book One', genre: 'fiction', publish: 1981,
   edition: 2004},
   {title: 'Book Two', genre: 'NOn-fiction', publish: 1982,
   edition: 2005},
   {title: 'Book Three', genre: 'history', publish: 1983,
   edition: 2006},
  {title: 'Book Four', genre: 'non- history', publish: 1984,
   edition: 2007},
   {title: 'Book Five', genre: 'science', publish: 1985,
    edition: 2008},
   {title: 'Book six', genre: 'non-science', publish: 1986,
   edition: 2009},
];

let userbooks = books.filter ( (bk)  => bk.genre === 'history')

// userbooks = books.filter ( (bk)  => {bk.publish>= 2000} )            // empty array dega ,bcz yaha pe ek (scope) open h..
userbooks = books.filter ( (bk)  => {return bk.publish >= 1983} )       // ya to (scope) hato ya fir (RETURN) keyword ka use karo..

console.log(userbooks);