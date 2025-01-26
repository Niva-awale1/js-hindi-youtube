const coding = ["js", "ruby", "python"]

// coding.forEach( function (item) {
//     console.log(item);
    
// })

// coding.forEach((item) => {
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// })

const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Js"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "RUBY",
        languageFileName: "ru"
    }

]

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})