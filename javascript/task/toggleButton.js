let btn= document.querySelector("#mode")
let body=document.querySelector("body")
let curmode="light";

btn.addEventListener("click",()=>{
    if(curmode==="light") 
        {
            curmode="dark";
           // document.querySelector("body").style.backgroundColor="black"
           // another way
           body.classList.add("dark");
           body.classList.remove("light");
        }
    else{
        curmode="light ";
        // document.querySelector("body").style.backgroundColor="white"
        body.classList.add("light");
        body.classList.remove("dark");
    }
    // console.log("yourre trying to click it in to dark mode");
    console.log(curmode);   
})