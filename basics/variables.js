const accountId = 123456 
let accountEmail = "rohit@google.com"
var accountPassword ="123321"
let accountstate;

// accountId = 32    // not allowed
accountEmail= "yadav@kk"
accountPassword="111112"
// prefer not to use var because of issue in block scope and functional scope


console.log(accountId);
console.table([accountId , accountEmail , accountPassword ,accountstate]); //prints simultaneously 

