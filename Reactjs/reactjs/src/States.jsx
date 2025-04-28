import React, { useState } from 'react'

const States = () => {
    let [count,setCount]=useState(0)
    
    const increment=()=>{
        setCount(count + 1)
    }
    const decrement=()=>{
        setCount(count - 1)
    }

    function greet()
    {
      console.log("hello Non parameterized"); 
    }
    function greet2(n){
      console.log("hello" +n);
    }

    let [user, setUser]=useState(["rohit", 25,"karnatka"])
    let changeUser=()=>
    {
      setUser(["sweety", 21,"heaven"])
    }

  return (
    <div>
      <h1>REACT COUNTER</h1>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      {/* inline function with arrow function */}
      <button onClick={()=> console.log("hello guys")}> Click </button>

      {/*  non parameterized function does'nt need the inline fucntion*/}
      <button onClick={greet}>Click using NonPara</button>

      {/* parametrised needs the inline arrow function */}
      <button onClick={()=> greet2(" parameterized")}> Click using Parameterized</button>

      {/* Array handling in states */}
      <h2>My name is {user[0]} and age is {user[1] }from {user[2]}</h2>
      
      {/* Interpolution method */}
      <h2>{`My name is ${user[0]} and age is ${user[1] } from ${user[2]}`}</h2>
      <button onClick={changeUser}>Change user</button>
    </div>
  )
}

export default States

