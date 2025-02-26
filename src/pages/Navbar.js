import React from 'react'
import logo from "../images/TravelGo.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} width="100px" height="100px" alt='' />
      <ul>
        <li>Home</li>
        <li>Tours</li>
        <li>About</li>
        <li>Contact Us</li>
      </ul>
      <button className='loginbtn'>Login</button>
    </div>
  )
}

export default Navbar
