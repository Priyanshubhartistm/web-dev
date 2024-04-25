const accountId = 123456789
let accountEmail = "bhartipriyanshustm@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "bharti.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountEmail, accountPassword, accountCity, accountState])