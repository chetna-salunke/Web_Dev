import React from 'react'

const HocUser = () => {
    let user={
        name: "Chetna",
        id:1234
    }
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>id: {user.id}</p>
      
    </div>
  )
}

export default HocUser
