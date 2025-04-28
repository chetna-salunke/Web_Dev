import React, { useEffect,useState } from 'react'

const Effect5 = () => {
   

let [fetchedData1,setFetchedData]=useState("")
    useEffect(()=>{
        let displayData =async()=>{
            let data=await fetch("https://softwium.com/api/books")
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
            return <h1 style={{backgroundColor:"pink",textAlign:"center",padding:"25px",height:"140px",border:"2px solid pink",borderRadius:"40px"}}key={ele.title}><span>{index+1}-</span>{ele.title}-{ele.authors}</h1>
        })
      }
    </div>
  )
}

export default Effect5