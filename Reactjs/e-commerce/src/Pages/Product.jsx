import React from 'react'
import style from './Product.module.css' 
import {Link, Outlet} from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <main className={style.parent}>
        <aside className={style.asidebar}>
          <h3>Our Products</h3>
          <ul>
            <Link to="/product/mens"><li>Men</li></Link>
            <Link to= "/product/women"><li>Women</li></Link>
            <Link  to= "/product/kids"><li>Kids</li></Link>
          </ul>

          <h3>By Category</h3>
          <ul>
            <Link to= "/product/sports"><li>Sports</li></Link>
            <Link to= "/product/casusal"><li>Casuals</li></Link>
            <Link to= "/product/formal"><li>Formals</li></Link>
          </ul>

          <h3>Brands</h3>
          <ul>
            <Link to="/product/puma"><li>Puma</li></Link>
            <Link to="/product/nike"><li>Nike</li></Link>
            <Link to="/product/redtape"><li>Red Tape</li></Link>
          </ul>
          
        </aside>
        <section className={style.mainbar}>
          <Outlet/>
        </section>
      </main>

      
    </div>
  )
}

export default Product
