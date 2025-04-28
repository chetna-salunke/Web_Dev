//getElementById
let msg= document.getElementById("wish")
console.log(msg);
msg.style.color="red"
//getElementsByClassName
let heading=document.getElementsByClassName("miss")
console.log(heading);
//
for(let i=0;i<heading.length;i++)
    heading[2].innerHTML = "enjoying 2025"
    heading[1].style.color="blue"
    
//queryselector and querySelectorAll
console.log(document.querySelector("#day")) ;  
let girls= document.querySelectorAll(".girls") 
console.log(girls);


let msg=document.querySelector("#msg")
console.log(msg);

msg.innerHTML="happy new year"
msg.style.color="pink"
msg.style.backgroundColor="purple"
