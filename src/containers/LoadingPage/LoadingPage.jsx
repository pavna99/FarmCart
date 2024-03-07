import React from 'react'
import logo from '../../Images/logo.png';
import heroimg from '../../Images/Hero Image.png';
import { Link } from 'react-router-dom';
import "./loadingpage.css"

function LoadingPage() {
  return (
    <div className='Loadingpage'>
        <img src={logo} className="logo" alt="logo" />
        <h1 className="herotext">Farm fresh for all</h1>
        <img src={heroimg} className="heroimage" alt="main" />
        <Link to="/loading">
          <div className="getbutton">
            <p>Get Started</p>
          </div>
        </Link>
    </div>
  )
}

export default LoadingPage
