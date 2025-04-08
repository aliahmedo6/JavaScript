// Two Data Types Primitive and Non Primitive - on the basis of how it will be on the memory and how we can access them

/* Primitive - 7 Types - Call by Value - When copying, will not give us orignal refernce of the memory - Will give us copy and 
 all the changes will be on the copying */
// String, Number, Boolean, Null(empty), undefined(memory space declare but no value), Symbol(make values unique), 
// BigInt(Big values or scientific values to handle)

const id = Symbol("123")
const id2 = Symbol("123")
console.log(id === id2);

const bigNumber = 25445599561n

/* Refernce Type or Non Primitive - Allocate reference of the memory directly*/
// Arrays, Objects, Functions
const heros = ["batman", "spiderman", "marvels"]
let muObjects = {
    name:"test",
    age:"22",
}
const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof heros)

// Javascript - dynamic language and not static, which means that variables can hold values of different types during runtime.

