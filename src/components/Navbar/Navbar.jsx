import React from 'react'
import './navbar.css'
import navimg1 from '../../Images/navbarlogo1.svg'
import navimg2 from '../../Images/navbarlogo2.svg'
import navimg3 from '../../Images/navbarlogo3.svg'
import navimg4 from '../../Images/navbarlogo4.svg'


function Navbar() {
  return (
    <div className='navbar-container'>
        <img src={navimg1} alt="" />
        <img src={navimg2} alt="" />
        <img src={navimg3} alt="" />
        <img src={navimg4} alt="" />
    </div>
  )
}

export default Navbar
