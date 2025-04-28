// merge array
let value = [10, 20, 30]
let value2 = [50,60,70,80]
console.log(typeof value + value2);

let MergeArray = value.concat(value2)
console.log(MergeArray);

let value3 = [44,99,88,22]
let MergeArray2 = value3.concat(MergeArray)


//sort array
let names = ["ajay","Shila","Ram","Shweta"]  
//if we give a string first letter in lowercase in that case it will take ascii
let name2 = ["Kartik","Vrushank","vicky"]
let group = names.concat(name2)
console.log(group);
console.log(group.sort());


let boys=["sanil","sarthak", "athrav","mohit","rohit","aratik"]
console.log(boys);
boys.splice(2,1)
console.log(boys);

let sortArray= boys.sort()
let reverseArray = boys.reverse()
console.log(sortArray);
console.log(reverseArray);
console.log(boys.includes("avinash")); //include --to check value present or not in given array
console.log(boys.indexOf("rohit"));







 

