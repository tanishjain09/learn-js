// # Primitive - call by value 
// 7 Types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 210983429472747297492n

// # Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"] //Array

let myObj = {
    name:"Tanish",
    age : 22,
} //-> objects

const myFunction = function() {
    console.log("Hello world");
}

// console.log(typeof myFunction);
// console.log(typeof heros);

//--------------------------------------------------------

// Stack(Primitive), Heap (Non-Primitive)




