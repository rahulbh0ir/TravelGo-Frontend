import React from 'react'
import logo from "../images/logo.png"
import {NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <>
    <div className='navbar'>

      <img onClick={() => navigate("/")} src={logo} width="120px" height="120px"  alt=''  />
      
      <ul>
        <NavLink to="/"><li>Home</li></NavLink>
        <NavLink to="tours"><li>Tours</li></NavLink>
        <NavLink to="about"><li>About</li></NavLink>
        <NavLink to="contact"><li>Contact</li></NavLink>
      </ul>
      <button>Login</button>
    </div>

    </>
  )
}

export default Navbar
