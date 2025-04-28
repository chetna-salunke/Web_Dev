import React from 'react'
import style from './navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className={style.navbar}>
            <ul>
                <Link to="/home"><li>Home</li></Link>
                <Link to="/product"><li>Product</li></Link>
                <Link to ="/contact"><li>Contact</li></Link>
            </ul>
            <div>
          <button>SignUp</button>
          <button>SignIn</button>
        </div>
        </nav>
        
    </div>
  )
}

export default Navbar
