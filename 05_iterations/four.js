//for in loop

const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby"

}
for (const key in myObject) {
    console.log(key, ':', myObject[key]);
    
        
    }

const myArr = ['JavaScript', 'C++', "Ruby"]
for (const key in myArr) {
    console.log(`${myArr[key]} is a programming language`);
    
        
    }

// const map = new Map()
// map.set('NEP', "NEPAL")
// map.set('IN', "INDIA")
// map.set('RUS', "RUSSIA")
    
// for (const key in map) {
//     console.log(key);
    
// }

