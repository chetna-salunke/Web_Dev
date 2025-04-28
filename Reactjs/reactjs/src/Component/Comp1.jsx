import React, { useState } from 'react'
import Comp2 from './Comp2.jsx'
import { createContext } from 'react'


//to overcome the problem of prop drilling we use this, directly it'll send the data to the specific
// component instead of sending another  where the dat ais not even required
export const UserCon=createContext()

const Comp1 = () => {
  let [user, setUser]=useState("manga")

  return (
    <div className='box'>
        <h1>This  is componant1</h1>
        <h2>{`hello ${user}`}</h2>
        <UserCon.Provide value={user}>
          <Comp2/>
        </UserCon.Provide>
      
    </div>
  )
}

export default Comp1
