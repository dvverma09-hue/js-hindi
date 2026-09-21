const name = "Divyanshu";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);

const gameName = new String("Divyanshu");
console.log(gameName[2]);
console.log(gameName.charAt(3));
console.log(gameName.indexOf('h'));

const newstring = gameName.substring(0,4);
console.log(newstring);

const anotherstring = gameName.slice(-8,4);
console.log(anotherstring);

const url = "abc#gmail.com"
console.log(url.replace('#','@'));