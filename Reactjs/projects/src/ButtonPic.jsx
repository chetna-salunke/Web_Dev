import React, { useState } from 'react'

const ButtonPic = () => {
    let [bike, setBike]=useState("");
   
  return (
    <>
      <section>
      {bike !==""?<h1>{bike}</h1>:<h1>No Bike Selected </h1>}
      {bike==="royal enfield 350" && (<img src="https://royalenfield.com.au/wp-content/uploads/2024/12/Bullet-350-Emerald-Hero.png" alt="" height={200}/>)}
      {bike==="jawa bobber 240" && (<img src="https://imgd.aeplcdn.com/600x600/n/cw/ec/184473/42-2024-right-front-three-quarter.jpeg?isig=0" alt="" height={200}/>)}
    
      </section>
       
       <button onClick={()=>setBike("royal enfield 350")}> click for Bullet</button>
       <button onClick={()=>setBike("jawa bobber 240")}> click for Jawa</button><br /><br />

    </>
  )
}

export default ButtonPic
