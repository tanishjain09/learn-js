// var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ",a);
    
}


// console.log("OUTER: ",a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Tanish"

    function two(){
        const wesite = "youtube"
        console.log(username)
    }
    // console.log(wesite); //can't use website outsite two() function
    two()
}

// one()

// ++++++++++++++++ interesting ++++++++++++++++++

function addOne(num){
    return num + 1
}

addOne(4)

const addTwo = function(num){
    return num + 2
}

addTwo(5)