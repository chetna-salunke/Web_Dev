import React, { useState } from 'react'

const Counter = () => {
    let [count, setCount]=useState(0)
    
  return (
    <div>
      <br/><br/><br/>
      <h1>REACT SIMPLE COUNTER</h1>
      <h1>{count}</h1>
      <button onClick={()=> setCount(count +1)}>+Incre</button>
      <button onClick={()=> setCount(count -1)}>-Decre</button>
    </div>
  )
}

export default Counter
