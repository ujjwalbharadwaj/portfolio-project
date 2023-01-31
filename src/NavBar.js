import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'



function NavBar() {
  return (
    <div>
      <Link to={'/about'}>about</Link>
    </div>
  )
}

export default NavBar;