const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// console.log(balance.toFixed(2)); //number after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));


// -------------------Maths---------------------------------------

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.9));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));

console.log(Math.floor(Math.random())); //value in between 0 to 1 only
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)