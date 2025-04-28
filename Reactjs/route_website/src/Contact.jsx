import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  let [user, setUser]=useState()
  let [pass, setPass]=useState()


  let nav=useNavigate()

  let handleForm=(e)=>{
    e.preventDefault()
    alert("Logged in successfully")
    nav("/home")
  }

  return (
    <div>
      <section className='form' onSubmit={handleForm}>
      <h1>Login form</h1>
        <form action="" >
            <input type="text"  placeholder='username' value={user} onChange={(event)=>{setUser(event.target.value)}}/>
            <input type="password" placeholder='password' value={pass} onChange={(event)=>{setPass(event.target.value)}}/>
            <button> Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
