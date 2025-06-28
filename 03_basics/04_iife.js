//Immediately Invoked Function Experssion (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB connected`);
    
})(); //we have to use ; in the end as to tell that this function is now over

( (name) => {
    //unnamed IIFE
    console.log(`DB CONNNECTED TWO ${name}`);
})('tanish')
