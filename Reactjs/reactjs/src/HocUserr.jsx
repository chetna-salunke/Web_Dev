import React from 'react'

const HocUserr = () => {
    let user={
        name: "Pradeep",
        id:3224
    }
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>id: {user.id}</p>
      
    </div>
  )
}

export default HocUserr
