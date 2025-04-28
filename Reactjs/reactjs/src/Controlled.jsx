import React ,{useState} from 'react'

const Controlled = () => {
    let [user,setUser]=useState("")
    let [password, setPassword]= useState()

      // let handleChange = (event) =>{
    //   event.target
    // setUser(event.target.value)
    // }
    let handleSubmit = (event) =>{
        event.preventDefault()// make the conatent stable
      
        // console.log(user);
        
      
      let User = {
        Username: user,
        Password: password
      }
      console.log(User);
    }
      
    return (
      <div>
  <section>
      <form action="" onSubmit={handleSubmit}>
          <h1>Login Form</h1>
          <input type="text" placeholder='Username' value={user} onChange={(event)=>setUser(event.target.value)} />
          <input type="password" placeholder='Password' value={password} onChange={(event)=>setPassword(event.target.value)} />
          <button>Submit</button>
      </form>
  </section>
      </div>
    )
}

export default Controlled
