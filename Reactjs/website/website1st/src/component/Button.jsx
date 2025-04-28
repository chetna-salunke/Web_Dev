import React from 'react'
import btn from './Button.module.css'

const Button = () => {
  return (
    <div>
      <button className={btn.Btn}>Explore More</button>
      <button className={btn.Btn2}>Visit Our Store</button>
    </div>
  )
}

export default Button
