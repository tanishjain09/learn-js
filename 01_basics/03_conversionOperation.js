let score = "Tanish"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);

// console.log(valueInNumber); will give NaN ->not a Number if we add numberial with alpha in string and convert to Number

/* converting and their output
"33" => 33
"33abc" => NaN
null = 0
true = 1;false = 1
undefined = NaN
 */

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn );

// 1 => true; 0=> fasle
// "" => false
// "nonemptystr" => true

let someNumber = 33

let stirngNumber = String(someNumber)

console.log(stirngNumber);
console.log(typeof stirngNumber);
