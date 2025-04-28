import React from 'react'
import Card from './Card.jsx'
import style from './Card.module.css'

const Kids = () => {
  return (
    <div>
          <section className={style.parent}>

          <Card name="Puma" picture=" https://assets.ajio.com/medias/sys_master/root/20240715/5UDK/66950eaf6f60443f313bc8ca/puma-puma-black-regular-bmw-m-motorsport-trinity-lace-up-sneakers.jpg" price={5400}/>
          <Card name="Puma" picture="https://assets.ajio.com/medias/sys_master/root/20240715/h557/66950f456f60443f313bdba0/puma-puma-black-regular-printed-mercedes-amg-petronas-f1-motorsport-sneakers.jpg " price={5400}/>
          <Card name="Puma" picture=" https://assets.ajio.com/medias/sys_master/root/20240716/lmsY/6696842a1d763220fac6ce7b/puma-green-regular-boys-knitted-slip-on-sneakers.jpg" price={5400}/>
          <Card name="Puma" picture=" https://assets.ajio.com/medias/sys_master/root/20240715/HMM7/669536246f60443f313dd4ca/puma-white-regular-bmw-m-motorsport-trinity-low-top-lace-up-sneakers.jpg" price={5400}/>

          <Card name="Cood" picture=" https://assets.ajio.com/medias/sys_master/root/20250227/eOpX/67c02be759f8353980ff40e3/-473Wx593H-701273915-pink-MODEL.jpg"price={4322}/>
          <Card name="Cood" picture="https://assets.ajio.com/medias/sys_master/root/20230801/us94/64c8eacfeebac147fc99e53b/shoetopia-pink-outdoor-kids-high-tops-lace-up-sneakers.jpg"price={4322}/>
          <Card name="Cood" picture="https://assets.ajio.com/medias/sys_master/root/20230809/guRx/64d3a560eebac147fcb9ba49/wotnot-by-azorte-lavender-outdoor-girls-slip-on-sneakers.jpg "price={4322}/>
          <Card name="Cood" picture=" https://assets.ajio.com/medias/sys_master/root/20240129/y9ID/65b763938cdf1e0df5d565d2/disney-red-%26-blue-thong-girls-minnie-mouse-print-thong-strap-flip-flops.jpg"price={4322}/>
           
          </section>     
    </div>
  )
}

export default Kids
