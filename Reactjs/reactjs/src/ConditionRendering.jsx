import React from 'react'

const ConditionRendering = () => {
    
    {/*
    let food="kinderjoy"
    if(food=="Waffle")
    {
        return <img src="https://images.getrecipekit.com/20230327191314-Rise%2520Waffle_Chocolate%2520Waffles.jpg?aspect_ratio=1:1&quality=90&" alt="" height={200}/>
    }
    else if(food=="Croissant")
    {
        return <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0iy5WGIDJbjmIkXsTFXoTnMs56SnyLqNZNT8eoulrm15JSzAbqoociPqnS28yGHgR7jY&usqp=CAU" alt="" srcset="" height={200}/>
    }
    else if(food=="kinderjoy")
    {
        return <img src="https://rukminim2.flixcart.com/image/850/1000/xif0q/chocolate/m/p/u/-original-imah4gpxyjkpdh2h.jpeg?q=20&crop=false" alt="" srcset="" height={200}/>
    }
    else
    {
        return <img src="https://gayathriscookspot.com/wp-content/uploads/2020/07/Cream-Rolls-5a.jpg" alt="" srcset="" height={200}/>
    }
    */}
    
    {/*
    let sweets="ras malai"
    switch(sweets)
    { 
        case "kaju katli":
            return <h1>kaju katli is in diamond shape</h1>

        case "ras malai":    
        return <h1>Ras malai is according to its container shape</h1>

        case "gulab jamun":
        return <h1>Gulab jamun is in  round shape</h1>
    }
    */}

    //ternary operator
    let bike="GT650"
  return (
    <>
    {/* {bike=="truimph"? <h1>Good bike</h1>:<h1>OG bike</h1>} */}
    <section>
        {bike !==""?<h1>{bike}</h1>:<h1>Not a Bike</h1>}
    </section>

    <button onClick={()=>setBike("royal enfield 350")}> click for Bullet</button>
    <button onClick={()=>setBike("jawa bobber 240 ")}> click for Jawa</button>
 
    
    </>

  )
}

export default ConditionRendering
