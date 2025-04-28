import React from 'react'
import FunStyle from './FunCom.module.css'

const FunCom1 = () => {
  let jsStyle={
    color:"red",
    border: "2px solid black",
    padding:"20",
    fontSize:"35px"
  }
  return (
    <div>
      <h1>I'm functional component </h1>
      {/* inline css  in react*/}
      <h1 style={{backgroundColor:"pink" , fontSize:"40px", textAlign:"center"}}>Hello React</h1>

      {/* object css */}
      <h1 style={jsStyle}>Hello Javascript</h1>
      
      {/* css module file*/}
      <ul className={FunStyle.list}>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
      </ul>
    </div>

  )
}

export default FunCom1
