
//call, apply, bind

//call->with call metho we'll borrow the function inside each object
/*
let person={
    firstname:"avinash",
    lastname:"reddy",
    printname:function()
    {
        console.log(this.firstname+ " "+this.lastname);     
    }
}
let person2={
    firstname:"pradeep ",
    lastname:"kumar",
}
person.printname()
person.printname.call(person2)
*/

//another way to write using call is-->
let person={
    firstname:"avinash",
    lastname:"reddy",
    
}
function printname()
    {
        console.log(this.firstname+ " "+this.lastname);     
    }
let person2={
    firstname:"pradeep ",
    lastname:"kumar",
}
let person3={
    firstname:"Rohit ",
    lastname:"Bagde",
}
printname.call(person)
printname.call(person2)
printname.call(person3)

//if we want to modify we can do it by passing parameter and argumnet 
let girl={
    firstname:"madhu",
    lastname:"reddy",    
}
function fullname(city, state)
    {
        console.log(this.firstname+ " "+this.lastname +" "+city + " " +state);     
    }
fullname.call(girl,"satara", "maharashtra")


//apply-->
let girl2={
    firstname:"sneha",
    lastname:"ghule",    
}
function fullname(city, state,msg)
    {
        console.log(this.firstname+ " "+this.lastname +" "+city + " " +state+" " +msg);     
    }
fullname.apply(girl2,["satara" ,"maharashtra","hello there"])

//bind-->it return copy of the function
let task=fullname.bind(girl)
console.log(task);

