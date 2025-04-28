import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <section className='navbar'>
       <ul>
        <li>
            <Link to="/home">HOME</Link>
        </li>  
        <li>
            <Link to="/about"> ABOUT</Link>
        </li>
        <li>
            <Link to="/product">PRODUCT</Link>
        </li>
        <li>
            <Link to="/service">SERVICE</Link>
        </li>
        <li>
            <Link to="/contact" >CONTACT</Link>
        </li>
       </ul>
      </section>
    </div>
  )
}

export default Navbar
