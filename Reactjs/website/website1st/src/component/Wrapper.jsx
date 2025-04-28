import React from 'react'
import wrapper from '../component/Wrapper.module.css'

const Wrapper = ({bgImage, heading, description}) => {
  return (
    <div>
      <section className={wrapper.parent}>
        <img src={bgImage} alt="" />
        <h1>{heading}</h1>
        <p>{description}</p>
      </section>
    </div>
  )
}

export default Wrapper
