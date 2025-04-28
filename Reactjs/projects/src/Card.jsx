import React from 'react'
import khichdi from './assets/khichdi.jpg'
import style from './Card.module.css'

const Card = () => {
  return (
    <>
      <section className={style.parent}>
      <h1> shabudana Khichdi</h1>

      <img src={khichdi} alt=""  height={250} width={300}/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio dolore tenetur recusandae cupiditate nostrum pariatur iure molestias quod quas voluptates! Ipsa excepturi repellendus similique labore animi eveniet nostrum inventore quam.</p>
      <button>Order Now</button> <br/> <br/>
      
      </section>
      
      
    </>
  )
}
 
export default Card
