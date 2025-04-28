import React, { useEffect,useState } from 'react'

const Effect4 = () => {
   

let [fetchedData1,setFetchedData]=useState("")
    useEffect(()=>{
        let displayData =async()=>{
            let data=await fetch("https://finalspaceapi.com/api/v0/")
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
            return <h1 style={{backgroundColor:"pink",textAlign:"center",padding:"2px",height:"20px",border:"2px solid pink",borderRadius:"40px"}}key={ele.path}><span>{ele.fullUrl}=---------</span>{ele.path}</h1>
        })
      }
    </div>
  )
}

export default Effect4