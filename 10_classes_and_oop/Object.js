function multiplyBy5(num){
    return num * 5;
}

//function is also object here
multiplyBy5.power = 2;
console.log(multiplyBy5(5));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createUser(username, price){
    this.username = username
    this.price = price;
}

createUser.prototype.increment = function(){
    this.printMe++; //without this it will be confusing to increase which variable value
}

createUser.prototype.printMe = function(){
    console.log(`price ${this.price}`);
    
}

const chai = new createUser("chai", 25); 
const tea = new createUser("tea", 50); 


//new keyword is important here because if we try to access our defined function without new keyword it will show
// this error  -----> Cannot read properties of undefined
chai.printMe();

//new notes in prototype video