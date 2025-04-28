import React, { useEffect,useState } from 'react'

const Effect1 = () => {
    let [count,setCount]=useState(0)


  

let [fetchedData1,setFetchedData]=useState("")
    useEffect(()=>{
        let displayData =async()=>{
            let data=await fetch("https://api.restful-api.dev/objects?id=3&id=5&id=10")
            console.log(data);
            let newData=await data.json()
            console.log(newData);   
            setFetchedData(newData)
        }
        displayData()
},[])

  return (
    <div>
   
      {
        fetchedData1 && fetchedData1.map((ele,index)=>{
            return <h1 style={{backgroundColor:"yellow",color:"black",textAlign:"center",border:"2px solid black",borderRadius:"40px"}} key={ele.name}><span>{index +1}-</span>{ele.name}</h1>
        })
      }
    </div>
  )
}

export default Effect1