function sayMyName(){
    console.log("Hiesenberg");
    
}

// sayMyName()

// function addTwoNumbers(num1, num2){  //parameters
//     console.log(num1 + num2);
    
// } ->function return nothing 

function addTwoNumbers(num1, num2){  //parameters
    
    let result = num1 + num2
    return result
    
}

const result = addTwoNumbers(2, 5) //here we give arguments
// console.log("Result" , result);

function loginUserMessage(username = "guest"){ //here we give default value to username
    if(!username){
        console.log("please enter a usename");
        return
    } 
    return `${username} just logged in`
}

// console.log(loginUserMessage()) // *if value it not passed then it is undefined not null here *

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400 , 500, 2000));

const user = {
    username : "tanish",
    price : 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)

const myNewArray = [200, 400 ,100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 100]));

