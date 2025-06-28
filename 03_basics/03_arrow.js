const user = {
    username : "nandini",
    price : 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "tanish"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     const username = "tanish"
//     console.log(this.username); //this will give undefined becoz we can use this.vairableName in object only
    
// }

// chai()

const chai = () => {
    let username = "tanish"
    // console.log(this);
    
}

// chai()

// () = >  -> arrow function

// const addTwo = (num1, num2) => {
//     return num1 + num2          //-> explicit return (we have to use the return keyword)
// }

// const addTwo = (num1, num2) => num1 + num2   //one more way to use (inplicit return){dont have to use return keyword}

// const addTwo = (num1, num2) => ( num1 + num2 )  //paranthesis uses as if we ever use object tha

const addTwo = (num1, num2) => ({username : "tanish"})

// console.log(addTwo(3, 4));


