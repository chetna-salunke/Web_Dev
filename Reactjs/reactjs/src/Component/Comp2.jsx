import React from 'react'
import Comp3 from './Comp3.jsx'

const Comp2 = () => {
  return (
    <div className='box'>
        <h1>This  is componant2</h1>
        <h2>Hello {name}</h2>
        <Comp3 name="manga"/> 
    </div>
  )
}

export default Comp2
