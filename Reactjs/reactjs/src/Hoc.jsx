import React, { useState } from 'react'

const Hoc = (WarpComponent) => {
  return (props)=>{
    let [loading , setLoding]=useState(true)

    setTimeout(()=>{
        setLoding(false)
    }, 2000)
  return(
    <div>
      {loading ? <p>Loading.....</p> : <WarpComponent{...props}/>}
    </div>
  )
}
}  

export default Hoc
