// let myName = "tanish      "

// console.log(myName.trueLength());


let myHero =  ["thro", "spiderman"]

let heroPower = {
    thor : "hammer",
    spierman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spierman}`);
        
    }
}

Object.prototype.tanish = function(){
    console.log(`tanish is present in all object`);   //by this now each object will have this function as we add this in Object
    
}

Array.prototype.heyTanish = function(){
    console.log(`Tanish says hello`);
    
}
// heroPower.tanish()
// myHero.tanish()
// myHero.heyTanish()
// heroPower.heyTanish() //heroPower will not ve heyTanish() function becz we add that in Array only

//inheritance
 
const User = {
    name: "chai",
    email : "chai@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport  = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = User



//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)



let anotherUserName = "ChaiAurCode       " 

String.prototype.trueLength = function(){
    console.log(`${this}`); 
    console.log(`True length is : ${this.trim().length}`);
    
}


 
anotherUserName.trueLength();

"tanish        ".trueLength();