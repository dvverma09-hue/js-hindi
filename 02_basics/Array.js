const array = [2,4,5,8,5]
const heros = ["ironman", "spiderman"]
const Array2 = new Array(4,2,7,6,8)
//console.log(array[3]);

// Array method

array.push(1);
//console.log(array);
array.pop();
//console.log(array);

array.unshift(1);
//console.log(array.includes(1));
//console.log(array.indexOf(8));
const newArr = array.join();
// console.log(array);
// console.log(newArr);

//Slice , Splice

console.log("A", array);

const myn1 = array.slice(1,3);
console.log(myn1);
console.log("B",array);


const myn2 = array.splice(1,3);
console.log(myn2);
console.log("C",array);







