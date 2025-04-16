const marvel_heros = ["Thor", "Ironmen", "Spiderman"]
const dc_heros = ["Batman", "Superman", "Flash"]

//marvel_heros.push(dc_heros) //push - add array in old array index and returns old array
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //concat - returns new array
// console.log(allHeros);

//Spread operator - Glass example - pick glass and drop it - glass will spread
const all_new_Heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_Heros);

const new_array = [1,2,3,[4,5,6],[7],[6,7,[4,5]]]
const real_new_array = new_array.flat(Infinity); //returns new array with all sub arrays elements concatenated
console.log(real_new_array);


console.log(Array.isArray("Test")) // check it is array or not
console.log(Array.from("Test")) // will convert into array 
console.log(Array.from({name: "test", age: 21})); // it will not convert it into array

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3)); //convert set of elements into new array

