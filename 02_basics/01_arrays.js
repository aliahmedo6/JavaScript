// array

const myArr = [0,1,2,3,4,5,]
const myHeros = ["batman", "superman"]

const myArr2 = new Array(1,2,3,4)
//console.log(myArr[1]);

//Array Methods
//  myArr.push(6) //add value at the end of array
//  myArr.pop() //remove value at the end of array
//myArr.unshift(9) //insert value at the start of array
//myArr.shift() //remove value at the start of array
// console.log(myArr.includes(9)); //check value in array present or not - return in boolean
// console.log(myArr.indexOf(3)); //return value present on index of array - if no value on index will return -1

// const newArr = myArr.join() //bind array and convert it to string

// console.log(myArr);
// console.log(newArr);

// slice, splice
console.log("A ", myArr);

const myn1 = myArr.slice(1,3) // return values of array present on given indexes - last range will not count e.g here will count 1-2
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // return values of array present on given indexes but it will manipulate the array
// (remove values of given indexes from array) - Also count all range e.g here will count 1-3
console.log(myn2);
console.log("C ", myArr);

 
