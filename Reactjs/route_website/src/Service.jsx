import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Service = () => {
  return (
    <div>
      <section className='parent'>
        <aside className='asidebar'>
          <ul>
            <Link to="/service/food">
              <li>Animal food</li>
            </Link>
            <Link to="/service/spec">
             <li>Species</li>
            </Link>
            <Link to="/service/donation">
             <li>Donation</li>
            </Link>
          </ul>
        </aside>
        <main className='mainbar'>
          <Outlet/>

        </main>
      </section>
    </div>
  )
}

export default Service
