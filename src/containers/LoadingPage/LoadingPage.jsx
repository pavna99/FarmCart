import React from 'react'
import logo from '../../Images/logo.png';
import heroimg from '../../Images/Hero Image.png';
import { Link } from 'react-router-dom';
import "./loadingpage.css"

function LoadingPage() {
  return (
    <div className='Loadingpage'>
      <div className='loadingbox'>
          <div className="herotext">Farm fresh for all</div>

          <Link to="/loading">
            <div className="getbutton">
              Get Started
            </div>
          </Link>
        </div>
    </div>
  )
}

export default LoadingPage
