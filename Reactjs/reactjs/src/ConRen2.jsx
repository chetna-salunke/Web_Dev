import React, { useState } from 'react'

const ConRen2 = () => {
    let [user, setUser]=useState(
        [{name:"Dev" ,place:"Gujrat"},
        {name:"chetna" ,place:"Delhi"},
        {name:"Sayli" ,place:"Pune"}
        ]
    )
  return (
    <>
      {/* <section onClick={()=>setLogin(!login)}>
        {login?"login":"logout"}
      </section> */}
      <h1>User Information</h1>
      <div>
        {user && user?.map((ele)=>{
            return(
                <section>
                    {ele.name}, {ele.place}
                </section>
            )
        })}
       
      </div>
    </>
  )
}

export default ConRen2
