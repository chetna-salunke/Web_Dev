import React from 'react'

//With the help of props we can access any component multiple times and if we want to change the content we can.

const PropCard = ({name, age, ismarried, hobbies, address, msg}) => {
    let cardstyle={
        border: "2px solid black",
        height:"320px",
        width:"270px",
        background:"brown",
        color:"white"
    }

  return (
    <>
      <section style={cardstyle}> 
        <h1>Name: {name}</h1>
        <h1>Age:{age}</h1>
        <h1>Is Married: {ismarried}</h1>

        <ul>
            {hobbies?.map((ele)=>
            {
              return <li>{ele}</li>
            }
            )}
        </ul>
        <h3>Address : {address.city}, {address.country}</h3>
        <h2>{msg}</h2>

      </section>
    </>
  )
}

export default PropCard
