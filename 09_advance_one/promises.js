const promiseOne = new Promise(function(resolve, reject){  //the callback function have two part resolve and reject
    //Do an async task
    //DB calls, crptography, network  
    setTimeout(function(){ //function execute after 1000ms
        console.log('Async task is compelete');
        resolve() //to connect resolve with then we have to call resolve() method
    },10000)
})

promiseOne.then(function(){  //then is directly related to resolve
    console.log("Promise consumed");   //this will come second as first the task is complete than the promise is consumed 
})


//can use Promise without creating variable
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolved");  
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "Chai",
            email: "chai@example.com"}
        )
    },1000)

})

promiseThree.then(function(user){  //this function get what the resolve() methods 
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){  
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Tanish", pasword: "123"})
        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
},)


//consumue promise four
promiseFour.then((user) => { //user aaya from resolve()
    console.log(user);
    return user.username  //this return goes to the next then callback
}).then((username)=>{ //get username from upper then this is call chainining
    console.log(username);
}).catch((error)=>{  //error coming
    console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected")
)

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "javascript", pasword: "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})


//we can handle promise using async await and .then .catch both
async function consumePromiseFive(){
    try{
        const response = await promiseFive //wait for promise five to come
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

async function getAllUsers() {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    }catch(error){
        console.log("E:",error);
    }
}
getAllUsers()


//using fetch() and .then and .catch
fetch('https://api.github.com/users/tanishjain09')
.then((response)=>{
    return response.json()  //we return the response so we have to handle it so useing another then to handle it
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error)
)

//read fetch() mdn