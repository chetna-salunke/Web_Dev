let person={
    name:"sayli",
    surname:"kamble",
    place: "pune"
}
console.log(person);

delete person.place
console.log(person);

person.place="nashik"
console.log(person);

//seal method will used to only upadte the properties , we cant delet any properties
Object.seal(person)
console.log(person);

console.log(Object.isSealed(person));

delete person.name
console.log(person);
//we can only updat ethe values using sealed
person.name="dev"
console.log(person);
//we cant create anthing now beacuse its sealed
person.subject="webtech"
console.log(person);


let newobj={
    name:"sanika",
    job: "tranie"
}
console.log(newobj);

//in frozen we cant do any addition , updation, deleteion
Object.freeze(newobj)

//check wherther the object is frozen or not
console.log(Object.isFrozen(newobj));
newobj.job="ceo of techno"
console.log(newobj);










