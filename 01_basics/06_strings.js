const name = "test"
const repoCount = 50

console.log(name + repoCount +"Value"); //outdated syntax

console.log(`Hello my name is ${name} and my repo count is ${repoCount}` ); //string interpolation - modern way to concatenate string

const gameName = new String ('Testing-hc-script')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-5,4)
console.log(anotherString)

const newStringOne = " test "
console.log(newStringOne);
console.log(newStringOne.trim()); // remove spaces from string

const url ="https://test.com/test%20scripting"
console.log( url.replace('%20','-'));
console.log(url.includes('test'))

console.log(gameName.split('-')); // remove defined from string






