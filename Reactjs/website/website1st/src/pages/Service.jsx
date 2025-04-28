 import React from 'react'
 import Wrapper from '../component/Wrapper.jsx'
import Button from '../component/Button.jsx'
 
 const Service = () => {
    let desc="Welcome to our platform!  We provide a range of services accessible through our easy-to-navigate website.  Explore our offerings through the 'Services' section and learn more about us via the 'About' page. Contact us today!"
   return (
    <div>
    <Wrapper bgImage="https://images.unsplash.com/photo-1642104704074-907c0698cbd9?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    heading="Service!" description={desc}/>
    <Button/>
  </div>
   )
 }
 
 export default Service
 