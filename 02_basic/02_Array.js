const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// let allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros)
// console.log(allHeros);

// const all_new_heros = [...dc_heros,...marvel_heros]//spread array 
// console.log(all_new_heros);

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[9,8]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);

console.log(Array.isArray("hitesh"))// mean this is array or not (result is come in true or false)
console.log(Array.from("Hitesh"));

console.log(Array.from({name:"hitesh"}));//intersting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))// of and from is same and convert the string, number in array or another array 


