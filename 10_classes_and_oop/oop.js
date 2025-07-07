const user = {
    username: "Tanish",
    loginCount: 8,
    signedIN: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
        
    }

}

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User("tanish", 12, true)
const userTwo = new User("baigan", 48, true)
console.log(userOne.constructor);
// console.log(userTwo);
