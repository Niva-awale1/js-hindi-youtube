//++++++++++++++++++++ Arrow function ++++++++++++++

// const addThree = (num1, num2, num3) => {
//     return num1 + num2 + num3
// } // first method

//const addThree = (num1, num2, num3) => num1 + num2 + num3 //implicit return(seconf method)
const addThree = (num1, num2, num3) => (num1 + num2 + num3) 

const addThree = (num1, num2, num3) => ({username : "Niva"})// to return an object ({}) is must
console.log(addThree(3, 4, 5));