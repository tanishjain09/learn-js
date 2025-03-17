const name = "Tanish"
const repoCount = 10

// console.log(name + repoCount + " value"); ->outdated

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //known as string interpolation 


const gameName = new String("Tanish-Seth-iya") //another way to create a 

// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(-5, 4)
// console.log(anotherString); 

const newStringOne = "   tanish    "
console.log(newStringOne);
console.log(newStringOne.trim());

 
console.log(gameName.split('-'))  