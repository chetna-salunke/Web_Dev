import React from 'react'
import Wrapper from '../component/Wrapper.jsx'

const About = () => {
    let desc="Welcome to our platform!  We provide a range of services accessible through our easy-to-navigate website.  Explore our offerings through the 'Services' section and learn more about us via the 'About' page. Contact us today!"
  return (
    <div>
      <Wrapper bgImage="https://images.unsplash.com/photo-1635492491273-455af7728453?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heading="about us!" description={desc}/>
    </div>
  )
}

export default About
