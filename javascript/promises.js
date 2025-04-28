//promises are used to Avoid "callback hell" by chaining asynchronous operations more cleanly..Handle errors

// let prom= new Promise((resolve,reject)=>{
//     let Bike="Truimph"
//     if(Bike)
//     {
//         resolve()
//     }
//     reject()
// })
// console.log(prom);
// prom.then(()=>{
//     console.log("Good Bike");  
// })
// prom.catch(()=>{
//     console.log("Best Bike");  
// })


// using async and await------ you'll find free api on postman,apilist etc

// let URL='https://dog.ceo/api/breeds/list/all'
// console.log(URL);
//fetch data from server using Json and async/await function
// async function getBreeds() 
// {
//     try{
//         let response=await fetch(URL);
//         if(!response.ok){
//             throw new Error('Network response was not ok');
//         }
//         let data=await response.json();
//         console.log(data);
//         let content=document.getElementById("content");
//         let breedList=document.createElement("ul");
//         for(let breed in data.message)
//         {
//             let listItem=document.createElement("li");
//             listItem.textContent=breed;
//             breedList.appendChild(listItem)
//         }
//         content.appendChild(breedList);
//     }
//     catch(error){
//         console.error('Error fetching dog breeds:',error);
        
//     }   
// }
// getBreeds();

//another ex usin promises and async & await
function getname(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(("the name is " + name));
            resolve();            
        },2000)
    })
}
async function getAllNames(){
    await getname("Chetna");
    await getname("Sayli");
    await getname("Tejashree");
    await getname("Soniya");
}
getAllNames()