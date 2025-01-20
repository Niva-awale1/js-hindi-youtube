const accountId = 134567
let accountEmail = "nivaawale@gmail.com"
var accountPassword = "123456"
accountCity = "Lalitpur"

//accountId = 2//

accountEmail = "rohan@gmail.com"
accountPassword = "654321"
accountCity = "Kathmandu"

console.log(accountId);


/*
Prefer not to nuse var
because of the issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])