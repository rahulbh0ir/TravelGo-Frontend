import React from 'react'
import { Outlet } from 'react-router-dom'

const TourLayout = () => {
  return (
    <div>
     <h4>List of Tours</h4>
     <Outlet /> 
    </div>
  )
}

export default TourLayout
