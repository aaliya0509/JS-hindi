const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState; //undefined value

// accountId = 2 //not allowed

console.log(accountId);

/*Prefer not to use var beacause of issue in block scope and functional scope*/

console.table([accountId, accountEmail,accountPassword, accountCity])