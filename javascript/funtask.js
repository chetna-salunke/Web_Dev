let p1= parseInt(prompt("enter 1st product price"))
let p2 = parseInt(prompt("enter 2nd product price"))
let p3= parseInt(prompt("enter 3rd product price"))
let p4 = parseInt(prompt("enter 4th product price"))
let p5= parseInt(prompt("enter 5th product price"))

let total = p1+p2+p3+p4+p5
console.log(total);

if(total>=5000){
    let discount =total-total*15/100
    console.log("congrats you got discount of 15% & your paybel amount is"+discount);   
}
else{
    console.log("Buy more products to get discount");
    
}
