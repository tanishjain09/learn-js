const coding = ["js", "ruby", "java", "cpp"]

// coding.forEach( function (val) {
//     console.log(val); 
// } )

// coding.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);  
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFilename:"js" 
    },
    {
        languageName: "java",
        languageFilename:"java" 
    },
    {
        languageName: "python",
        languageFilename:"py" 
    }
]
//now using foreach in myCoding

myCoding.forEach( (item) => {
    console.log(item.languageName);
})