//singleton
//const tinderUser = new Object()

//non - singleton
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name  = "Rohan"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "niva@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Niva",
            lastname: "Awale"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);
 
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj3 = {5: "e", 6: "f"}

//const obj4 = {obj1, obj2, obj3} // in this method the three objects that we teried to assign is inside the aother object but we need all these objects combine in one
// const obj4 = Object.assign(obj1, obj2, obj3)// so Object.assign allows all the object to comine in one
const obj4 = {...obj1, ...obj2, ...obj3} //now this is the easiest way to combine all te bojects into one and most used 

//console.log(obj4);

//multiple objects inside the array
const users = [
    {
        id: 1,
        email: "nivaawale@gmail.com"

    },
    {
        id: 1,
        email: "nivaawale@gmail.com"

    },
    {
        id: 1,
        email: "nivaawale@gmail.com"

    },{
        id: 1,
        email: "nivaawale@gmail.com"

    },
]

users[1].email
console.log(tinderUser);

// console.log(Object.keys(tinderUser));//it prints keys of tinderUser
// console.log(Object.values(tinderUser));//it prints values of tinderUser
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));


const course = {
    coursename: "JavaScript",
    price: "1000",
    courseInstructor: "Hitesh"
}

const {courseInstructor: instructor} = course // objects destructuring
console.log(instructor);

//json

// {
//     "name": "niva",
//     "gender": "Female",
//     "address": "balkumari"

// }

[
    {},
    {},
    {},
]









