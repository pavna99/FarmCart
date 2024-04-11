import React from 'react'
import './navbar.css'
import navimg1 from '../../Images/navbarlogo1.svg'
import navimg2 from '../../Images/navbarlogo2.svg'
import navimg3 from '../../Images/navbarlogo3.svg'
import navimg4 from '../../Images/navbarlogo4.svg'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <div className='navbar-container'>
      <Link to='/dashboard'>
        <img src={navimg1} alt="" />
      </Link>
      <Link to='/notification'>
        <img src={navimg2} alt="" />
        </Link>
        <Link to='/profile'>
        <img src={navimg3} alt="" /></Link>
        <img src={navimg4} alt="" />
    </div>
  )
}

export default Navbar
