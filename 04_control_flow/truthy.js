const UserEmail = "nivaawale@gmail.com"

if (UserEmail) {
    console.log("You are logged in");
    
} else {
    console.log("you cannot log in");
    
}

//falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
//"0", "false", " ", [], {}, function(){}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 3 ?? 4
// val1 = null ?? 9
 val1 = undefined ?? 10

console.log(val1);
