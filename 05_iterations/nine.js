//reduce
const myNum = [1, 3, 4]

// const myTotal = myNum.reduce(function (acc, curr) {
//     console.log(`acc: ${acc} and curr: ${curr}`);
//     return acc + curr
    
// }, 0)

// console.log(myTotal);

const myTotal = myNum.reduce( (acc, curr) => acc + curr, 0)
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "html course",
        price: 1999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price ,0)
console.log(priceToPay);

