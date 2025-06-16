// Singleton - use of constructor

// const tinderUser = new Object() ->singleton object

const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Vaibhavi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "vaibhavi@gmail.com",
    fullname: {
        userfullname:{
            firstname: "vaibhavi",
            secondname:"verma"
        } 
    }
}  

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// const obj3 = {obj1, obj2}
const obj3 = Object.assign({},obj1, obj2)
console.log(obj3 );
