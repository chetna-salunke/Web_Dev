import React, { children } from 'react'
import PC from './PC.module.css'

const PropChildren = ({children}) => {
  return (
    <>
        <section className={PC.card}>
           {children}
        </section>
    </>
  )
}

export default PropChildren 