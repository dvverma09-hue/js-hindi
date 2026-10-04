const marvel = ["thor","loki","ironman"];
const dc = ["flash","superman","batman"];

// marvel.push(dc);
// console.log(marvel[3][2]);

// const all = marvel.concat(dc);
// console.log(all);

// const allnew = [...marvel,...dc];
// console.log(allnew);

// const another = [2,4,5,[6,7,],1,3,[5,3,[9,8]]];
// const real = another.flat(Infinity);
// console.log(real);

console.log(Array.isArray("Divyanshu"));
console.log(Array.from("Divyanshu"));
console.log(Array.from({Name: "Hitesh"}));  // Intresting

let s1 = 100;
let s2 = 23;
let s3 = 5;

console.log(Array.of(s1,s2,s3));
