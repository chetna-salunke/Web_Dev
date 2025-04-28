import React, {useState} from 'react'

const Controlled2 = () => {
    let [form, setForm] = useState({
        user : "",
        password : "",
        comment:"",
        gender: ""
    
    })
    let {user, password,comment, gender} = form;
    
    let handleSubmit = (event)=>{
        event.preventDefault()
        console.log(form);
        
    }
    let handleChange = (event) =>{
        setForm({
            ...form,
            [event.target.name]: event.target.value})   
          
    }
  return (
    <div>
        <section>
        <form action="" onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <input type="text" placeholder='Username' name="user" value={user} onChange={handleChange} />
            <input type="password" placeholder='Password' name ="password" value={password} onChange={handleChange} />

            <textarea placeholder='Comment' name="comment" value={comment} onChange={handleChange}></textarea><br /><br />


            <label htmlFor="">Gender</label><br />
            <input type="radio" name="gender" value={gender} onChange={handleChange} />Male <br />
            <input type="radio" name="gender" value={gender} onChange={handleChange} />Female <br />
            <button>Submit</button>
            </form>
            
        </section>
     
    </div>
  )
}

export default Controlled2