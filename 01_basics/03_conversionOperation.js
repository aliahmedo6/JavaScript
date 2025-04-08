let score = "33"

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score) //convert into number
console.log(typeof valueInNumber)

// "33" - 33
// "33abc" - Nan
// true - 1; false - 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean (isLoggedIn) //convert into boolean
console.log(booleanIsLoggedIn)

// 1-true; 0-false
// "" - false
// "test" - true

let someNumber = 33
let stringNumber = String(someNumber) //convert into string
console.log(stringNumber)
console.log(typeof stringNumber)