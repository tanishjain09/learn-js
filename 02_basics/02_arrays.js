const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(all_new_heros)

const another_array = [1, 2, 3,[4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //make the array in array to one single array and remove inner array to primitive element
// console.log(real_another_array);

// console.log(Array.isArray("Tanish")) //to check if it is arrya ot not
// console.log(Array.from("Tanish")) //make the parameter array
// console.log(Array.from({name: "tanish"})) //will return empty array,we have to tell whom to make array key or value

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3)); //make array of this variables



