// function sayMyName(){
//     console.log("N");
//     console.log("I");
//     console.log("V");
//     console.log("A");
    
// }

// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
    
}

const result = addTwoNumbers(3, 5)
// console.log("result:", result);

function loginUserMessage(username = "rohan"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage());


function calculateCartPrice(...num1){
    return num1
}

// console.log(calculateCartPrice(400, 500, 600))

const user = {
    username: "Niva",
    age: "22",
    address: "Balkumari"
}

function handleObject(anyobject){
    console.log(`My name is ${anyobject.username} and my age is ${anyobject.age}. I live in ${anyobject.address}`);
}

// handleObject(user) //firt way
// handleObject({
//     username: "Rohan",
//     age: 23,
//     address: "Imadol"

// }) //second way