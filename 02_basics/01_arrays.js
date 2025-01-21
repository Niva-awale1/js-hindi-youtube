//array

const myArr = [0, 1, 2, 3, 4, 5, 6]
const myHeroes = ["Spiderman", "Ironman", "Hulk", "CaptainAmerica"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//array methods

// myArr.push(8)// It simply adds the value
// myArr.push(9)

// myArr.unshift(8)// it adds the number you put in fornt
// myArr.shift()and it removes the number you add through unshift()

// console.log(myArr.includes(9)); //it verifies that the number you ask is in the array or not
// console.log(myArr.indexOf(5)); //it check the number is in which index

// const newArr = myArr.join() //Adds all the elements of an array into a string, seperated by thr specified sperator (In simpler words it chsnge array into String)

// console.log(myArr);
// console.log(newArr);

/* slice, splice*/ 

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)
console.log("C", myn2);







