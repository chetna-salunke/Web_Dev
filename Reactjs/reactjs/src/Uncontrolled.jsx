import React, {useRef} from 'react'

const Uncontrolled = () => {
    let username=useRef()
    let password=useRef()
    
    let handleForm=(event)=>{
        event.preventDefault()
        // console.log(event);
        let user=username.current.value;
        let passcode=password.current.value
            let userDetails={
                userName : user,
                password : passcode
            }
            console.log(userDetails);
    }
  return (
    <div>
      <section>
        <form action="" onSubmit={handleForm}>
            <h1>Login Form</h1>
            <input type="text" placeholder='Username' ref={username}/>
            <input type="text" placeholder='Password' ref={password}/>
            <button>Submit</button>
        </form> 
      </section>
    </div>
  )
}

export default Uncontrolled