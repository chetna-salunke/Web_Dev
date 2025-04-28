import React, { useContext } from 'react'
import {UserCon} from './Comp1.jsx'

const Comp4 = () => {
  let name=useContext(UserCon)
  return (
    <div className='box'>
        <h1>This  is componant4</h1> 
        <h2>{name}</h2>     
    </div> 
  )
}

export default Comp4
