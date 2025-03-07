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
        marginLeft: "27%",
        border: "none",
        backgroundColor: "black",
        color: "white",
        width: "150px",
        height: "50px",
        borderRadius: "10px",
        cursor: "pointer",
      }}   
    >Go To Home</button>
    </div>
    </>
  )
}

export default NotFound
