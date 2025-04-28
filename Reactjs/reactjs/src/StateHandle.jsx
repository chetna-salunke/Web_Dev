import React, { useState } from 'react'

const StateHandle = () => {
    let[user, setUser]=useState({
        Name:"avinash",
        lastName: "reddy",
        avatar:"https://www.pittsburghzoo.org/wp-content/uploads/2024/03/20210823__PS60225cPaulSelvaggio-1-e1720611330542.webp"
    })

    function changeUser(){
        setUser({
            Name:"harsha",
            lastName:"gowde",
            avatar:"https://c.files.bbci.co.uk/8b8a/live/541cdc60-ab47-11ef-b929-77253fe9e947.jpg"
        })
    }
  return (
    <section style={{border:"1px solid black"}}>
      <div>
         <img src={user.avatar} alt=""  height={150}/>
      </div>
      <div>
        <h1> {` ${user.Name} ${user.lastName}`}</h1>
      </div>
      <div>
        <button onClick={changeUser}>Change User</button>
      </div>
    </section>
  )
}

export default StateHandle
