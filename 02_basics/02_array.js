const marvelHeroes = ['Ironman', 'Spiderman', 'Hulk']
const dcHeroes = ['Batman', 'Superman', 'Flash']

// console.log(marvelHeroes);
// console.log(dcHeroes);

// marvelHeroes.push(dcHeroes)
// console.log(marvelHeroes);

const all_new_heroes = [...dcHeroes, ...marvelHeroes] // it combines the both arrays it is call sprad operator

// console.log(all_new_heroes);

const another_array = [1, 2, 3, 4, 5, [6, 7 ,8, [9, 10]]]

const real_another_array = another_array.flat(Infinity)// The depth level specifying how deep a nested array structure should be flattened. Defaults to 1. 
console.log(real_another_array);

console.log(Array.isArray("Niva"));//checks weather given is array or not
console.log(Array.from("Niva"));//it makes a given word or givern string array

console.log(Array.from({name: "Niva"})); // interesting

let score = 200
let score2 = 300
let score3= 400

console.log(Array.of(score, score2, score3));

