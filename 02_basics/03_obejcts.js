//singleton
// Object.create -> another way to create object 
//obejct literals

const mySym = Symbol("Key1")

const JsUser = {
    name: "Tanish",
    "full name":"Tanish Sethiya",
    [mySym] : "mykey1", //to use mySym as Symbol data type we have to use [] 
    age: 19,
    location: "Baroda",
    email: "tanish@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "tanish@meta.com"
// Object.freeze(JsUser)

JsUser.email = "tanish@microsoft.com"//changes will not propagate now
// console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
