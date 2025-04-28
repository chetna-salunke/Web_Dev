import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Formal = () => {
  return (
    <div>
          <section className={style.parent}>

          <Card name="Lee Cooper" picture="https://assets.ajio.com/medias/sys_master/root/20250227/cLkX/67c0782659f83539800117c1/lee-cooper-black-oxfords-men-lace-up-oxford-formal-shoes.jpg" price={5400}/>
          <Card name="Lee Cooper" picture=" https://assets.ajio.com/medias/sys_master/root/20250116/6qwP/6788a293663dbe1c5fdb46f6/arrow-brown-oxfords-men-low-top-leather-oxford-shoes.jpg" price={5400}/>
          <Card name="Lee Cooper" picture="https://assets.ajio.com/medias/sys_master/root/20241226/ZSht/676d24760f47f80c87227d1c/lee-cooper-tan-oxfords-men-low-top-plain-toe-oxfords.jpg " price={5400}/>
          <Card name="Lee Cooper" picture=" https://assets.ajio.com/medias/sys_master/root/20230602/Z7QW/6479265142f9e729d70ac3ab/sir-corbett-orange-oxfords-formal-derby-shoes.jpg" price={5400}/>
          
          <Card name="Jove" picture="https://www.shoetree.io/cdn/shop/files/875-17_BEIGE-1_df3fa50c-ef91-4439-9bf1-556ee68757b3.jpg?v=1742632748&width=533" price={5322}/>
          <Card name="Jove" picture="https://www.shoetree.io/cdn/shop/files/875-996IQ-16_GREEN_1_330bfb16-766f-4414-9db0-87541bff5d16.jpg?v=1742632773&width=533" price={5322}/>
          <Card name="Jove" picture="https://www.shoetree.io/cdn/shop/files/875-996IQ-16_BEIGE_1_b3885050-f61a-44da-8803-e5504dede977.jpg?v=1742632760&width=533" price={5322}/>
          <Card name="Jove" picture="https://www.shoetree.io/cdn/shop/files/875-28_GREY-1_d6c87666-18da-4ec8-a6ef-a6b752a92799.jpg?v=1742632724&width=533" price={5322}/>
          </section>     
    </div>
  )
}

export default Formal
