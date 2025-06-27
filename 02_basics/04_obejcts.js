// Singleton - use of constructor

// const tinderUser = new Object() ->singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Vaibhavi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "vaibhaviverma16@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vaibhavi",
            secondname:"verma"
        } 
    }
}  

// console.log(regularUser.fullname.userfullname.firstname);
 
const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1, obj2} con't combine two object in this way
//make object inside a object that is object of object
// const obj3 = Object.assign({},obj1, obj2) //way to combine two object

const obj3 = {...obj1,...obj2} //another way to combine object and mostly use this way
// console.log(obj3 );


//this things will help when working with databases
const users = [
    {
        id : 1,
        email : "t@gmail.com"
    },
    {
    },
    {
    },
]
users[1].email
console.log(tinderUser);

 console.log(Object.keys(tinderUser));
 console.log(Object.values(tinderUser));
 console.log(Object.entries(tinderUser));

 
console.log(tinderUser.hasOwnProperty('isLoggedIn')) //to check if this property present in object or not 