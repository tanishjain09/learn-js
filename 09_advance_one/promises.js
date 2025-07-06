const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, crptography, network 
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve() //to connect resolve with then
    },1000)
})

promiseOne.then(function(){  //then is related to resolve
    console.log("Promise consumed");
})

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

promiseThree.then(function(user){
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


promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
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

async function consumePromiseFive(){
    try{
        const response = await promiseFive //wait for promise five to come
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()

// async function getAllUsers() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("E:",error);
//     }
// }
// getAllUsers()

fetch('https://api.github.com/users/tanishjain09')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error)
)