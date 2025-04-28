/*Qs1.
 Get user to input a number using prompt(“Enter a number:”). 
Check if the number is a multiple of 5 or not.

let num =prompt("enter a number:");

if(num % 3===0){
    console.log(num,"is multiple of 3");  
}
else{
    console.log(num ,"is not multiple of 3");
}*/



/*
Qs2. Prompt the user to enter their full name. 
Generate a username for them based on the input Start username with @, followed by their full name and ending with the fullname length.

const profile ={
    usernmae: "@chetna01",
    isfollow: false,
    followers: 123,
    following: 123,
}
 profile["followers"] = profile["followers"] + 1;
console.log( profile ["followers"]);
console.log( profile );
console.log( typeof profile["username"] );
*/


/*Qs3.
 Write a code which can give grades to students according to their scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F

let score = prompt("enter your score(0-100)");
let grade;

if(score>=90 && score<=100){
    grade="A";
}
else if(score>=70 && score<=89){
    grade="B";
}
if(score>=60 && score<=79){
    grade="A";
}
if(score>=50 && score<=69){
    grade="A";
}
if(score>=0 && score<=59){
    grade="A";
}

console.log("you're grade is : ", grade);
*/


/* Qs4.
 Print all even numbers from 0 to 100.


for(let num = 0; num <= 100; num++)
{
    if(num % 2 == 0){
        //even numbers
        console.log("num =", num);
    }
}
*/


/* Qs5.
Create a game where you start with any random game number. Ask the user to keep
guessing the game number until the user enters correct value

let gameNum = 44;
let userNum = prompt("Guess the game number");

while (userNum != gameNum){

}
console.log("congrats!, you guess right number!");
*/


/* template literal
let obj = {
    item: "pen",
    price: 10,
};
//template literal using-->
let output ='the cost of ${obj.item} is ${obj.price} rupees';
console.log(output);

//without template string-->
console.log("the cost of",obj.item, "is" ,obj.price, "rupees");

let specialstring ='this is a template literal ${1+2+3}';
console.log(specialstring);
console.log("hii\tapna\n college");
*/


/*Qs6. 
Prompt the user to enter their full name. Generate a username for them based on the input
Start username with @, followed by their full name and ending with the fullname length
g: user name = “shradhakhapra”, username should be “@shradhakhapra13”

let fullname = prompt("enter your full name");
let username= "@" + fullname + fullname.length;
console.log(username);
*/

/*Qs7. 
For a given array with marks of students -> [85, 97, 44, 37, 76, 60]
Find the average marks of the entire class.


let marks= [85, 97, 44, 37, 76, 60];
let sum = 0;
   
for (let val of marks){
    sum += val;
}
let avg = sum / marks.length;
//console.log('avg marks of  the class is: ${avg}'); its not working properly
console.log("avg marks of  the class is:", avg);
*/


/*Qs8.
For a given array with prices of 5 items -> [250, 645, 300, 900, 50]
All items have an offer of 10% OFF on them. Change the array to store final price after
applying offer.


let items = [250, 645, 300, 900, 50];

let i = 0;
//for (let val of items){
   // let offer = val/10;
    //items [i] =items[i] -offer;
    //console.log("value after  offer:", items);
    //i++;}

for (let i = 0; i < items.length; i++) {
    let offer = items [i] / 10;
    items [i] -= offer;
}
console.log(items);

*/
  
/*Qs9.
Create an array to store companies -> “Bloomberg”,“Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”
a. Remove the first company from the array
b. Remove microsoft & Add Ola in its place
c. Add Amazon at the end
*/

/*let companies = ['Netflix',' google', 'ibm','microsoft', 'uber','bloomberg'];
 
companies.shift();   //remove the first company 
companies.splice(3,1,"ola");   //remove the  microsoft & add ola in its place
companies.push("Amazon");   //add amazon at the end
*/

 
//functions parameter -> like local variable of function-> block scope 

/*Qs10.
Create a function using the “function” keyword that takes a String as an argument &
returns the number of vowels in the string.*/

/*
function countvowels(str) {

    let count = 0;
    for(const char of str){
        if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
    {
        count++;
    }
    }
    return count;
}
 
const countvow =(str)=> {
    let count = 0;
    for(const char of str){
        if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u")
    {
        count++;
    }
}
    return count;
 
};
*/

//for each loop in arrays are "higher oredr function/ method" that take whether function parameter or return  

/*Qs. 11  For a given array of numbers, print the square of each value using the forEach loop


 let num =[2,3,4,5,6];

 num.forEach((num) =>
 {
    console.log(num ** 2);//num * num
 });

///or 

 let num =[2,3,4,5,6];

 let calcsquare =(num) =>{
    console.log(num ** 2);//num * num
 }
num.forEach((calsquare); 
 */



//map-->cretes the array with th eresult of some opertaion. the value it scallback return are used to from new array
/*
let nums =[34,89,54];
let newarray= nums.map((val)=>{
    return val*2
});
console.log(newarray);
*/

//filter-->cretes a new arrya of elemnet that give true for condition
/*
let even=[3,5,8,1,7,4];
let evenarr=even.filter((val)=>{
    return val%2!=0;
});
console.log(evenarr);
*/   

//reduce-->perform some operation and reduces the array to single value .it return that single value.
/*
let arr =[6,9,2,9];

const output= arr.reduce((prev,curr)=>{
    return prev > curr? prev: curr;
});
console.log(output);
*/



//Qs.we are given array of marks student .filter out the marks of student  that scored 90+
/*
let marks=[100,78,90,87,90];
let sort=marks.filter((val)=>{
    return val> 90
});
console.log(sort);
*/

//Qs.take no as input and create an array of no from 1 to n u.use reduce method to calculate the sum and product of all the no. in array
let num=prompt("enter a number:");
let arr=[];
for(let i=1;i<=num;i++)
{
    arr[i-1]=i;//1(0),2(1),3(2)....
}
console.log(arr);
let sum =arr.reduce((prev, curr)=>{
    return prev+curr;
});
console.log("sum=",sum);
let product =arr.reduce((prev, curr)=>{
    return prev*curr;
});
console.log("factorial=" ,product);//3=>1*2*3=6 






  