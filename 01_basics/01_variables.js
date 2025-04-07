const accountId = 12100 //cannot change - assign value locked
let accountEmail = "test@gmail.com" 
// Use const and let and don't use var
var accountPassword = "34521"
accountCity = "Islamabad" //not good approach but possible
let accountState;

//accountId = 2 //not Allowed

accountEmail = "hc@gmail.com"
accountPassword = "1122"
accountCity = "Karachi"

console.log(accountId)
/*
Prefer not to use 'var' 
Becuase of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])