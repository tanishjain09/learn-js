// const coding = ["js", "ruby", "java", "cpp"]

// const values = coding.forEach( (item) => {  //-> we give callback function
//      // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4 ,5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// const newNums = []
// myNums.forEach( (num) => {  //if we want to use foreach only than we can use this way
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books =[
    {title : 'Book one', genre: 'Fiction', publish: 1981, edition: 2004},
    {title : 'Book two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title : 'Book three', genre: 'History', publish: 1999, edition: 2007},
    {title : 'Book five', genre: 'Fiction', publish: 1990, edition: 2005},
];

const userBooks = books.filter( (bk) => bk.genre === 'Fic  tion')

console.log(userBooks);
