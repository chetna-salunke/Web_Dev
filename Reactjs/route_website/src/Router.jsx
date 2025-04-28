import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import Home from './Home.jsx'
import Service from './Service'
import Navbar from './Navbar.jsx'
import About from './About.jsx'
import Product from './Product.jsx'
import Cart from './Cart.jsx'
import Contact from './Contact.jsx'
import Food from './Food.jsx'
import Donation from './Donation.jsx'
import Species from './Species.jsx'

const Router = () => {
  return (
    <div>
       
      <BrowserRouter>
      <Navbar/>
      <Routes>
              <Route path='/home' element={<Home/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/product' element={<Product/>}>
              <Route path='/product/cart' element={<Cart/>}/>
              </Route>

              <Route path='/service' element={<Service/>}> 
                  <Route path='/service/food' element={<Food/>}/>
                  <Route path='/service/donation' element={<Donation/>}/>
                  <Route path='/service/spec' element={<Species/>}/>
              </Route>   
              
              <Route path='/contact' element={<Contact/>}/> 

      </Routes>
      </BrowserRouter>
    </div>
  )
}           

export default Router
