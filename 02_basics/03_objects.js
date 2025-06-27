//singleton 

// Object.create -> another way to create object (made by constructor and it is singleton)
//obejct literals

const mySym = Symbol("Key1") //making a symbol datatype

//object -> key value pair
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

// console.log(JsUser.email)//first way to access
// console.log(JsUser["email"])//another way to access
// console.log(JsUser["full name"]);//havr to use square bracket only for this type key
// console.log(typeof JsUser[mySym]);

JsUser.email = "tanish@meta.com"
// Object.freeze(JsUser) //will lock the Object JsUser and we can't update values further

JsUser.email = "tanish@microsoft.com"//changes will not propagate now
// console.log(JsUser);  


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hellot JS user, ${this.name}`);
    
}

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

