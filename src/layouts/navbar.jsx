import React from 'react'
import { Link } from 'react-router-dom'
import '../style/navbar.css'
export default function Navbar() {
  return (
    <div>

      <div className='div-navbar'>
        <Link to={"/"}>Home</Link>
        <Link>Project</Link>
        <Link>Blog</Link>
        <Link>About</Link>
      </div>
      <br />

    </div>
  )
}
