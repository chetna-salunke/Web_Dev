// let h2= document.querySelector("h2")
// console.dir(h2.innerText);
// h2.innerText=h2.innerText + " from Apna college";

// let divs= document.querySelector(".box");
// let idx=1;
// for(div of divs){
//     div.innerText='new value ${idx}';
//     idx++;
// } 

//------getAttribute
// let div= document.querySelector("div")
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

//----setAttribute
// let para = document.querySelector("p")
// console.log(para.setAttribute("class","newclass"));

//----createElement
// let btn= document.createElement("button"); 
// btn.innerText="clickme";
// console.log(btn);
// let div=document.querySelector("div")
// div.append(btn)
// div.prepend(btn)
// div.after(btn)
// div.before(btn)


//-----remove
// let newhead= document.createElement("h1")
// newhead.innerHTML="<i>helllo world!</i>"
// document.querySelector("body").prepend(newhead)
// // newhead.remove()

// let para= document.querySelector("p")
// para.remove()


//solve this--------
// let newbtn=document.createElement("button")
// newbtn.innerText="click me"
// newbtn.style.color="pink"
// newbtn.style.backgroundColor="green"
// document.querySelector("body").prepend(newbtn)


///solve this--------
// let para=document.querySelector("p")
// para.getAttribute("class")
// para.setAttribute("class","newclass")


//----event----
// let btn =document.querySelector("#btn")
// btn.onclick=()=>{
//     console.log("btn is clicked");
//     let a=22
//     a++;
//     console.log(a);
// }

//manuplating -------------------
// const div= document.createElement("div")
// const body= document.querySelector("body")
// const p =document.createElement("p")

// p.classList.add("container")  //can see chnages on elemnts of console
// p.setAttribute("id", "container_text")
// p.innerHTML="im paragraph"

// const img= document.createElement("img")
// img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCViFCnLqddCN7uHZrEQ1u20IOBbAzvM4JA&s"
// img.alt="random img"

// //another way  using setAttribute
// // img.setAttribute(
// //     "src","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoCViFCnLqddCN7uHZrEQ1u20IOBbAzvM4JA&s"
// // );
// // img.setAttribute("alt","random image");
// img.style.height="12rem"
// img.style.width="300px"
// div.appendChild(img)
// div.appendChild(p)
// body.appendChild(div)

// const newpara=document.createElement("p")
// newpara.innerHTML="this is new paragraph using afterbegin"
// //i want this above paragraph before the div then--
// div.appendChild(newpara)
// div.insertAdjacentElement("afterbegin", newpara)


// //-----onclick event------
// let btn =document.querySelector("#butt")
// // btn.addEventListener("click", function(){
// //     console.log("button clicked nowwww");
// // });
// //or else can do also like this
// const dothis= function()
// {
//     console.log("i was clicked");
// };
// butt.addEventListener("click",dothis);

//------submit event--by creating form ----
// const form=document.getElementById("form")
// const log= document.getElementById("log")
// form.addEventListener("submit",(event )=>{
//     console.log(event);
//     event.preventDefault();
//     log.innerHTML=`the current timestamp of the form submission is ${event.timestamp}`
//     //or--    log.innerHTML=`<h1>the current timestamp of the form submission is ${event.timestamp}</h1>`
    
// });

tinyurl.com/WFMock