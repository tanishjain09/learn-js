//array 

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4, 5)

// console.log(myArr[0]);
// console.log(myArr2[1]);

// Array methods

myArr.push(6)
myArr.pop(6)

myArr.unshift(9)
myArr.shift()

// console.log(myArr.indexOf(3)); 
// console.log(myArr.includes(9));\

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice, splice

console.log("A ",myArr);

const myn1 = myArr.slice(1, 3)//while in slice

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3) //in splice we extract the given range data to new array and remove the extracted from main array while slice doesn't 
console.log("C ", myArr);
console.log(myn2);







