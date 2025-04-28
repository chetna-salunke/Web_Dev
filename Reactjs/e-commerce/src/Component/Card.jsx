import React from 'react'
import style from './Card.module.css'

const Card = ({name, picture, price}) => {
  return (
    <div>
        <article className={style.card}>
            <img src={picture} />
            <h1>Brand : {name}</h1>
            <h2>Price : {price}</h2>
            <button>Add to cart</button>
            <button>Buy Now</button>
        </article>    
    </div>
  )
}

export default Card
