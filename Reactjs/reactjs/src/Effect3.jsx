import React, { useEffect,useState } from 'react'

const Effect3 = () => {
   

let [fetchedData1,setFetchedData]=useState("")
    useEffect(()=>{
        let displayData =async()=>{
            let data=await fetch("https://api.nbp.pl/api/cenyzlota/last/30/?format=json")
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
            return <h1 style={{backgroundColor:"lightYellow",textAlign:"center",padding:"25px",height:"100px",border:"4px solid green",borderRadius:"40px"}} key={ele.data}><span>{ele.data}-</span>{ele.cena}</h1>
        })
      }
    </div>
  )
}

export default Effect3