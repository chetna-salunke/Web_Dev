import React,  { Fragment, useState } from 'react'
import './App.css'
import Navbar from './component/Navbar.jsx'
import Wrapper  from './component/Wrapper.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Service from './pages/Service.jsx'
import Contact from './pages/Contact.jsx'
import navStyle from './component/Navbar.module.css'
import navData from './utils/data.js'
// import Footer from './pages/Footer.jsx'

const App = () => {
    let [page , setPage]= useState("contact")
    
    let  handleChange =(ele)=>{
      setPage(ele.stateVal)
    
    }
  return (
    <div>
      <Navbar/>
      <Home/> 
      <About/>
      <Service/>
      {/* <Contact/> */}
      {/* <Footer/> */}
      <header className={navStyle.parent}>
        <ul>
          {navData.map((ele)=>{
            return(
              <Fragment key={ele.navText}>
              {/* <li onClick={()=>handleChange(ele)}>{ele.navText}</li> */}
                  <li>{ele.navText}</li>
                  <span>❤️</span>
              </Fragment>
            )
          })}
        </ul>
      </header>
      {page == "home"? <Home/>:null}
      {page == "about"? <About/>:null}
      {page == "services"? <Service/>:null}
      {page == "contact"? <Contact/>:null}
      
    </div>
    
  )
}

export default App
