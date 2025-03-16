const accountId = 144553 //constant mean the value can't be change again varible become constant now
let accountEmail = "tanish.jain@gmail.com" //makeing variable using let  now using let to make a varibles
var accountPassword = "12345"//making variable using var keyword 
accountCity = "Baroda" //not a good way but can make varible wihtout a keyword
let accountState; //creating a variable with no data will print undefined


// accountId = 2 -> now allwed

accountEmail = "tanish123@gmail.com"
accountPassword = "121212"
accountCity = "Ahmedabad"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity,accountState])
/*
Prefer not to use var
beacuse of issue in block scope and functional scope
*/