import React, { useMemo, useState } from 'react'

//improve the performance of the react appln

const UseMemo = () => { 
    let[counterOne, setCounterOne]=useState(0)
    let[counterTwo, setCounterTwo]=useState(0)

    let handleOne=()=>{
        setCounterOne(counterOne + 1)
    }
    let handleTwo=()=>{
        setCounterTwo(counterTwo + 1)
    }


    let isEven=useMemo( ()=>{
            let x=0;
            while(x<2000000)
                x++
            return counterOne%2==0;
        }
    )
    
 

  return (
    <div>
        <h1>{counterOne}</h1>
        <button onClick={handleOne}>Increase {counterOne}</button>
        <span>{isEven? "  Even" :"  Odd"}</span>
        <br /><br />

        <h1>{counterTwo}</h1>
        <button onClick={handleTwo}>Increase {counterTwo}</button>

    </div>
  )
}

export default UseMemo
