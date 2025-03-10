import React from 'react'
import Navbar from '../pages/Navbar'
import { Outlet } from 'react-router-dom'

const layout = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Outlet />
      </div>
    </>
  )
}

export default layout
