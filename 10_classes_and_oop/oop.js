const user = {
    username: "Tanish",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }

}

// const promiseOne = new Promise()
// const date = new Date()


// console.log(this);
//the thing is when we console log the this in global space in node.js it return {} as it has nothing in context in global scope
//while if we print this is same in brower in global scope it gives window because brower so many other thing also like dom api,fetch() and many more.

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    // return this
}

const userOne = new User("tanish", 12, true)
const userTwo = User("baigan", 48, true)
console.log(userOne.constructor); //reference to own
// console.log(userTwo);


console.log(userOne instanceof User);
console.log(userTwo instanceof User);