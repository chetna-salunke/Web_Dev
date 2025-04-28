// setTimeout(()=>{
//     console.log("statement 1");
// },2000)
// setTimeout(()=>{
//     console.log("statement 2");
// },4000)
// setTimeout(()=>{
//     console.log("statement 3");
// },6000)
// setTimeout(()=>{
//     console.log("statement 4");
// },8000)


//setTimeOut()---whenever we want to execute and we pass as argument function and second

//this is callback hell example --which we dont use it affects the performance 
function printname(name, nextData)
{
    setTimeout(()=>{
        console.log("my name is " +name);
        if(nextData)
        {
            nextData()
        }
    },2000)    
}

printname("Rohit",()=>{
    printname("Avinash",()=>{
        printname("Vijay",()=>{
            printname("Pradeep",()=>{
            })
        })
    })   
})