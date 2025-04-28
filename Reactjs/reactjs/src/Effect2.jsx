import React, { useEffect,useState } from 'react'

const Effect2 = () => {
   

let [fetchedData1,setFetchedData]=useState("")
    useEffect(()=>{
        let displayData =async()=>{
            let data=await fetch("https://finalspaceapi.com/api/v0/episode/")
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
            return <h1 style={{backgroundColor:"green",textAlign:"center",padding:"2px",height:"50px",border:"2px solid black",borderRadius:"10px"}} key={ele.name}><span>{index+1}-</span>{ele.air_date}-{ele.name}</h1>
        })
      }
    </div>
  )
}

export default Effect2