//Singleton
//Object.create

//Object Litrals

const mysym = Symbol("key1")

const user = {
    name: "Divyanshu",
    "Full name": "Divyanshu verma",
    [mysym]: "mykey1",
    age: 22,
    location: "lucknow",
    emails: "acb@gmail.com"
}

// console.log(user.age)
// console.log(user["age"],user["Full name"])
// console.log(user[mysym])

user.emails = "acb@google.com"
//Object.freeze(user)
user.emails = "acb@gmail.com"

//console.log(user);

user.greeting = function(){
    console.log("hello")
}
console.log(user.greeting());

user.greeting2 = function(){
    console.log(`hello ${this.name}`)
}
console.log(user.greeting2());




