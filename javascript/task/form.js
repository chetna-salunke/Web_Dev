let username= document.querySelector("#user")
let password= document.querySelector("#pass")
let form=document.querySelector("#form")

// console.log(username);
// console.log(password);

form.addEventListener("submit", (e)=>{  //instead of submit i can use input also Fires whenever the input value changes (e.g., typing, pasting, deleting).
    e.preventDefault()
    // console.log(e);

    let user =document.getElementById("user").value
    let passcode =document.getElementById("pass").value

    let person={
        username:user,
        password:passcode
    }
    console.log(person);
    
    

})

