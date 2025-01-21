const name = "Niva Rani Awale"
const repoCount = 8

//console.log(`My Name is ${name} and my repo count is ${repoCount} `);

const gameName = new String ("niva-rani")
//console.log(gameName[2]);

//console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(2, 4)
const anotherString = gameName.slice(-5, 0)
// console.log(newString);
// console.log(anotherString);

const newStringOne = "   niva    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://niva.com/niva%20awale"


console.log(url.replace('%20', '-'));
console.log(url.includes('rohan'));
console.log(gameName.split('-'));
console.log(gameName.blink());
















