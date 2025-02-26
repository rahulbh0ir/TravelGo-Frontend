import React from 'react'
import logo from "../images/TravelGo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} width="100px" height="100px" alt='' />
      <ul>
        <Link to="/">Home</Link>
        <Link to="/tours" >Tours</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact Us</Link>
      </ul>
      <button className='loginbtn'>Login</button>
    </div>
  )
}

export default Navbar
