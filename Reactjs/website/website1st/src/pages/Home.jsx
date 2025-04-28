import React from 'react'
import Wrapper from '../component/Wrapper.jsx'

const Home = () => {
  let desc="Welcome to our platform!  We provide a range of services accessible through our easy-to-navigate website.  Explore our offerings through the 'Services' section and learn more about us via the 'About' page. Contact us today!"
  return (
    <div>
      <Wrapper bgImage="https://plus.unsplash.com/premium_photo-1671739623977-05c769bd7932?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      heading="Welcome!" description={desc}/>
    </div>
  )
}

export default Home
