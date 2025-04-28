import React, { useEffect,useState } from 'react'

const Effect = () => {
    let [count,setCount]=useState(0)


   //syntx of useEffect
   //1.setup function
   //2.optional dependancy in the form of array[]
   //3.cleanup function-->rare but its working

    // setInterval(()=>{
    //     setCount(count +1)
    // },1000)

//    2) // useEffect(()=>{
    //     let timer=setInterval(()=>{
    //         setCount(count+1)
    //     },1000)

    //     return ()=>{
    //         clearInterval(timer)
    //     }
    // },[count])

let [fetchedData,setFetchedData]=useState("")
    useEffect(()=>{
        let fetchData =async()=>{
            let data=await fetch("https://api.github.com/users")
            console.log(data);
            let newData=await data.json()
            console.log(newData);   
            setFetchedData(newData)
        }
        fetchData()
},[])

  return (
    <div>
      {/* <h1>Count-{count}</h1> */}
      {
        fetchedData && fetchedData.map((ele,index)=>{
            return <h1 key={ele.login}><span>{index +1}-</span>{ele.login}</h1>
        })
      }
    </div>
  )
}

export default Effect