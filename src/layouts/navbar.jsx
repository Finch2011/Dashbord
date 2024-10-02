import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'
import { Context } from '../context/NavContext'
export default function Navbar() {
  const {project , setProject} = useContext(Context)
  return (
    <>
    <div className='div-main'>
      <h1>Finch</h1>
      <div className='div-navbar'>
        <Link to={"/"}>Home</Link>
        <Link to={"/profil"}>Profil</Link>
        <Link>About</Link>
      </div>
      <div className='position-nav'>
       <div className={project ? "true" : "false" }></div>
      <Link className='shop' to={"/Shoppingcart"} onClick={()=>{
        setProject(false);
      }}>🛒</Link>
      </div>
      <br />

    </div>
    </>
  )
}
