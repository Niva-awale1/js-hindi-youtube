//Immediately Invoked Function Expressions (IIFE)

(function chai() {
    //named IIFE
    console.log(`DB connected`);
    
})(); // in simpler words what is done here is like noermal way to call a function is chain () now but using iife we wraped full chai functiona and call it with again()

//for arrow function 
((name) => {
    console.log(`DB CONNECTED PLAY ${name}`)
})("Niva") //UNKNOWED IFFE


