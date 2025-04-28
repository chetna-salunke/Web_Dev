import React from 'react'
import Comp4 from './Comp4.jsx'
const Comp3 = (user) => {
  return (
    <div className='box'>
       <h1>This  is componant3</h1>
       <h2>{`Hello ${user}`}</h2>
       <Comp4 name="mangi"/>
    </div>
  )
}

export default Comp3
