import React from 'react'
import logo from "../images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} width="120px" height="120px"  alt='' />
      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/tours" ><li>Tours</li></Link>
        <Link to="about"><li>About</li></Link>
        <Link to="contact"><li>Contact</li></Link>
      </ul>
      <button>Login</button>
    </div>
  )
}

export default Navbar
