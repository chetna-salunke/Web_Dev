import React,{ useContext, useState } from 'react'
import Custom from './Custom.jsx'


const Custom2 = () => {
     let [count,increment,Decrement]=Custom(5)
  return (
    <div>
       <h2>{count}</h2>
       <button onClick={increment}>Increment</button>
       <button onClick={Decrement}>Decrement</button>
      
    </div>
  )
}

export default Custom2 