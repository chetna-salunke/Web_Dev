//object by using literals
/*
let person={
    name: "Atul",
    age: 23,
    password: Symbol("Pass@123"),
    isMarried: false,
    hobbies: ["swimming", "cycling","Riding"],
    address: {
        place: "pune",
        state: "maharashtra"
    } 
}
console.log(person);
console.log(person.password);
console.log(person.address.place);
*/


//by using new constructor
/*
let employee= new Object()
employee.name="isha"
employee.place="pune"
employee.hobbies=["cooking", "dancing","painting"]
//accesing the object keys by using keys method
console.log(Object.keys(person));
//accesing the object values by using values method
console.log(Object.values(person));
//accesing the object properties by using entries method
console.log(Object.entries(person));


let person1={
    name: "Disha",
    place: "pune",
    age: 23
}
console.log(person);
//updateing the object keys
person1.age=16
person1.name=" digambar"
console.log(person1);

//adding new keys to object
person1.hobbies=["singing", "testing", "dancing"]
console.log(person1);

//deleteing the object using delete keyword
delete person1.name
console.log(person1);
*/


//by using function
function employee(id, ename, sal){
//  console.log(id+" " +ename +" "+sal);
this.id=id
this.ename=ename
this.sal=sal
 
}
let e2= new employee(123, "ram", 1000)
console.log(e2);
let e1= new employee(567, "sham", 2000)
console.log(e1);


