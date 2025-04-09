// Two Types of memory 
// Stack - in Primitive - will give us the copy of declare variables
// Heap - in Non-Primitive - will give us reference to orignal value (if change, will change in original values)

let myYoutube = "mychannel"
let anotherName = myYoutube
anotherName = "test"
console.log(myYoutube)
console.log(anotherName)

let user1 = {
    email:"test@gmail.com",
    id:"123",
}
let user2 = user1
user2.email = "batman@gmail.com"
console.log(user1.email)
console.log(user2.email)