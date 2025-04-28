//fucntion in js
// named function

function msg(){
    console.log("hello js");
}
msg()
msg()

 //named function with parameter
 function task(a,b,c=20){
    console.log(a+b+c);
 }
 task(10, 20,30)
 //it'll return 60 as o/p cuz of default parametar we have defined
 
 //operation with  only string
 function word(a, b, c){
    console.log(a+b+c); 
 }
 word("A", "B")
 //it returns undefined which can be define later


 //opration with string and numaber
 function task1(a,b,c){
    console.log(a+b-c);
 }
 task1(10, "rohit")
 // it'll return NaN(not a number)


 //Anonymous function 
//  function(){
//     console.log("Im anonymous function");  
//  }

 let task3= function(a=30, b=40,x, y){
    console.log("im first class function");
    console.log(a+b);
    console.log(x*y); 
 }
 task3(30)
 task3(10,10)

 let age =38
 console.log(age);
 let name ="HTML"
 console.log(name);
 
 //higher order fun--> "a fun which take another fun as an argument"
//Call back fun--> 'a fun goes or pass as an argument to another fun "
let msg=()=>{
    return "hi good morning"
}
//msg is  callback fun
msg("hello ji")
msg("hola hola ji")
//greating is higher order fun
let Greeting=(a,b)=>{
    console.log(a(msg)+b);  
} 
Greeting(msg, "Rohit") 


//immediately invoke function execution
(function task (a,b){
   console.log(a+b);
   })
   (10,20)
   
   msg()
   function msg(){
       console.log("hey im iife function");  
   }
   msg()
   function msg2(){
       console.log("hey everyone!!!");
   }
   msg2()
   msg()


//nested function//--> "a fun writeen inside another fun"
let parent =(msg)=>{
   //statment need to be stored  inside parameter
   console.log(msg+ "hello Im parent ");

   let child =(msg2)=>{
       console.log(msg2+ "hello im child ");
   }
   child("good evening ")
   // parent("good night ") 
}
// child("good afternoon")
parent("good morning ") 



//first class fun or fun with expression or first citizen fun--->it means assigning function to the variable

//arrow function--> it has lesser syntx ()=>{}
   let arrowfun=(a,b,c)=>{
      console.log(a+b+c); 
  }
  arrowfun("HTML ", 'css'," JS")
  
  
  const greet = (name, age) => {
   return `hello ${name} your age is ${age}`;
  };

  const dis= greet("sani", 20);
  console.log(dis);
  