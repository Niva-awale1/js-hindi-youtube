//symbol in object

const mySym = Symbol("key1")

const JsUser = {
    name : "Niva",
    "last name": "Awale",
    age : 22,
    [mySym] : "mykey1",
    gender : "Female",
    address : "Balkumari",
    email: "nivaawale@gmail.com",
    isloggedin:  false,
    lastLoginDays: ["Tuesday", "Wednesday", "Friday"]

}

// console.log(JsUser.email);
// console.log(JsUser["last name"]);//this is the best way to access an object.

JsUser.email = "rohan@gmail.com"//change email
// Object.freeze(JsUser)// to freeze an object
JsUser.email = "nivaawale@gmail.com"//so now after freezing an object the email doesnot changes

//console.log(JsUser);


//function
JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());