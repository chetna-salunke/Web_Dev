

//filter()--> based on the condition it returuns true --it  Creates a new array with elements .
function evennum(num){
    console.log(num %2==0);  
}
evennum ([23,24,25]) //false
evennum(54)//true

//unfiltered array
let age=[23,24,25,32,27,33]
console.log(age);

let newages = age.filter(odd)
//filtered array
console.log(newages);

function odd(num){
    console.log(num % 2 == 1);
    return num % 2 == 1 
}

//filter  the names
let names=['sayli','shweta','anuja','sneha','pooja']
let snames=names.filter(
    (ele)=>{
        return ele.includes("n")
    }
)
console.log(names);
console.log(snames); 


// map-->to perform operation on every element in the array and it gives the new array without affecting old one (arr.map(callbackfun(value,index,array))
let values=[10,20,30,41]
console.log(values);

let newvalues= values.map((item,index)=>{
    console.log("items of array" + item, "index value of array" +index);
})
console.log(newvalues);

let multiplay= values.map((ele)=>{
    return ele%2 ==0;
})
console.log(multiplay);


//reduce-->perform some operation and reduces the array to single value .it return that single value.
let arraynum=[10,20,30,40]
let newarray=arraynum.reduce((firstval,secondval)=>{
    console.log(firstval,secondval);
    return firstval +secondval
},1000)
console.log(newarray);









