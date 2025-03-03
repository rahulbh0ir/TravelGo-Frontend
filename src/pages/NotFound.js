import React from 'react'
import Skull from "../images/skull.png"
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <>
    <div>
    <img className='skull' src={Skull}/>
    <div>404 | Page not found </div>
    <button 
      onClick={() => navigate("/")} 
      style={{
        marginLeft: "35%",
        border: "none",
        backgroundColor: "black",
        color: "white",
        width: "80px",
        height: "50px",
        borderRadius: "10px"
      }}   
    >Home</button>
    </div>
    </>
  )
}

export default NotFound
