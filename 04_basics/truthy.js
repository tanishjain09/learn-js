const userEmail = "" //falsy value

if(userEmail){
    console.log("Got user email");
}else{
    // console.log("Don't have user email");
}


//falsy value :

// false, 0, -0, BigInt 0n, "", null, undefined, NaN
// other than this all are truthy value

//truthy value:
// "0",'false'," ",[],{ },function() -> truthy 

// if (userEmail.length === 0) {
//     console.log("array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty");
    
}

//Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
val1 = null ?? 10

console.log(val1);
