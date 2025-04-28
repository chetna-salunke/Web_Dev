import React from 'react'
import {BrowserRouter, Route , Routes} from 'react-router-dom'
import RouterHome from './RouterHome.jsx'
import RouterNavbar from './RouterNavbar.jsx'

const Router = () => {
  return (
    <div>
       
      <BrowserRouter>
      <RouterNavbar/>
      <Routes>
              <Route path='/home' element={<RouterHome/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}           

export default Router
