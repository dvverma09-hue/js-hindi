let mydate = new Date();
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(mydate.toString());

console.log(typeof(mydate));

let createdate = new Date(2022,0,22);
console.log(createdate.toDateString());

let myTime = Date.now();
console.log(myTime);
console.log(createdate.getTime());
console.log(Math.floor(Date.now()/1000));