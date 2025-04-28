import React from 'react'
import { Link } from 'react-router-dom'

const RouterNavbar = () => {
  return (
    <div>
      <section className='navbar'>
       <ul>
        <li>
            <Link to="/home">HOME</Link>
        </li>
       </ul>
      </section>
    </div>
  )
}

export default RouterNavbar
