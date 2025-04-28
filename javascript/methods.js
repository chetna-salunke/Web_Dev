//push(), pop(),unshift(), shift(), slice()

let employee=["sayli","viraj","sahdev","sakshi", "sneha"]
console.log(employee);

//push()--> it'll insert element at the last index
employee.push("Soham")
console.log(employee);

//pop()--> it'll remove element from the last index
employee.pop()
console.log(employee);

//unshift()--> it'll add array element at starting index
employee.unshift("Suyash")
console.log(employee);

//shift()--> it'll remove array element at starting index
employee.shift()
console.log(employee);

//slice()-->it'll extract a portion of an array and return it as a new array. It doesn't modify the original array. and also need to create new variable to store that 
let group=["nandini","pratiksha", "pranita","samrat","yogesh"]
console.log(group);
group.slice(0,3)
console.log(group);

let girls=group.slice(0,3)
console.log(girls);

let boys=group.slice(3,5)
console.log(boys);

//splice()-->it'll affect the orignal array and without creting new variable
let places=["Pune", "Mumbai", "Goa", "Kolhapur", "Bengluru", "Naded"]
console.log(places);

places.splice(3,2,"Rajstan","Delhi")
console.log(places);





