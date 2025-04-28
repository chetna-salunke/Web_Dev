import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Sports = () => {
  return (
    <div>
          <section className={style.parent}>
          
          <Card name="Puma" picture="https://assets.ajio.com/medias/sys_master/root/20240814/mYg8/66bcba521d763220fa7b01bc/puma-pink-lace-ups-milenio-tech-suede-coquette-lace-up-sneakers.jpg" price={5400}/>
          <Card name="Puma" picture=" https://assets.ajio.com/medias/sys_master/root/20240812/QvpP/66ba1dd51d763220fa72f444/puma-black-lace-ups-women-cassia-rose-lace-up-shoes.jpg" price={5400}/>
          <Card name="Puma" picture=" https://assets.ajio.com/medias/sys_master/root/20240910/MPRf/66e0534b1d763220fad71f5c/puma-white-lace-ups-women-vikky-v3-alpine-lace-up-shoes.jpg" price={5400}/>
          <Card name="Puma" picture=" https://assets.ajio.com/medias/sys_master/root/20240814/XUe9/66bc41586f60443f3107c5b8/puma-beige-lace-ups-bolster-surrealc-frosted-lace-up-shoes.jpg" price={5400}/>
          
          <Card name="Red Tape" picture="https://assets.ajio.com/medias/sys_master/root/20241227/pWUT/676e6e31c148fa1b3062f536/red-tape-white_blue-walking-men-sports-shoes-with-mesh-upper.jpg" price={5400}/>
          <Card name="Red Tape" picture=" https://assets.ajio.com/medias/sys_master/root/20241119/c92s/673c6e230f47f80c8795fe16/red-tape-grey-walking-men-logo-print-walking-shoes-with-lace-fastening.jpg" price={5400}/>
          <Card name="Red Tape" picture=" https://assets.ajio.com/medias/sys_master/root/20240929/kyxC/66f8dcdf260f9c41e83d521b/red-tape-blue-walking-men-round-toe-lace-up-shoes.jpg" price={5400}/>
          <Card name="Red Tape" picture=" https://assets.ajio.com/medias/sys_master/root/20241113/vrTu/67349336260f9c41e8ddb14a/red-tape-black-walking-men-panelled-lace-up-athleisure-shoes.jpg" price={5400}/>
 
          </section>     
    </div>
  )
}

export default Sports
