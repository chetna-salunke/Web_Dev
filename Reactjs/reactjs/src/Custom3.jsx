import React from 'react'
import Custom from './Custom.jsx'

const Custom3 = () => {
    let [count,increment,Decrement]=Custom(10)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
  )
}

export default Custom3