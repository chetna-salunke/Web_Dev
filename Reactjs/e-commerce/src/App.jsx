import React from 'react'
import Navbar from './Navbar.jsx'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import Product from './Pages/Product.jsx'
import Contact from './Pages/Contact.jsx'
import Mens from './Component/Mens.jsx'
import Women from './Component/Women.jsx'
import Kids from './Component/Kids.jsx'
import Sports from './Component/Sports.jsx'
import Casusal from './Component/Casusal.jsx'
import Formal from './Component/Formal.jsx'
import Puma from './Component/Puma.jsx'
import Nike from './Component/Nike.jsx'
import Redtape from './Component/Redtape.jsx'

const App = () => {
  return (
    <div>
   <BrowserRouter>
   <Navbar/>
    <Routes>
      <Route path ='/home' element={<Home/>}/>

      <Route path ='/product' element={<Product/>}>
      <Route path ='/product/mens' element={<Mens/>}/>
      <Route path ='/product/Women' element={<Women/>}/>
      <Route path ='/product/kids' element={<Kids/>}/>
      <Route path ='/product/sports' element={<Sports/>}/>
      <Route path ='/product/casusal' element={<Casusal/>}/>
      <Route path ='/product/formal' element={<Formal/>}/>
      <Route path ='/product/puma' element={<Puma/>}/>
      <Route path ='/product/nike' element={<Nike/>}/>
      <Route path ='/product/redtape' element={<Redtape/>}/>
      </Route>
      
      <Route path ='./contact' element={<Contact/>}/>
    </Routes>
   
   </BrowserRouter>
      
    </div>
  )
}

export default App
