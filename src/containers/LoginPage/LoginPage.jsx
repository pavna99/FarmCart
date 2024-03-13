import React from 'react'
import { Link } from 'react-router-dom';
import './loginpage.css'

function LoginPage() {
  return (
    <div className='signup-login-page-container'>
        <div className='header-section'>
            <h2 style={{'font-size':'xx-large', 'paddingBottom':10, 'fontWeight':'semibold'}}>Log In</h2>
            <p style={{'font-size':'small', 'fontWeight':'200'}}>Please sign in to your existing account</p>
        </div>
        <div className='form-container'>
            <form action="#" method="POST"> 
            <label className='labelstyles'>Email</label><br></br>
            <input className='inputfield' type="email" name="email" placeholder="Enter Your Email" required /><br></br>
            <label className='labelstyles'>Password</label><br></br>
            <input className='inputfield' type="password" name="password" placeholder="Enter Your Password" required /><br></br>
            <input className='checkbox' type='checkbox' name="rememberme" />
            <label style={{'margin':'0 0 0 4px', 'textAlign':'center'}} className='labelstyles'>Remember Me</label>
            <label className='fplabel'>Forgot Password</label>
            <Link to="/location">
            <input className='submitbtn' type="submit" value="Log In" />
            </Link>
            </form> 
            <p style={{'font-size':'medium', 'fontWeight':'300', 'textAlign':'center'}}>Don't have an account? <Link to='/signup'>Sign Up here.</Link></p>
        </div>
    </div>
  )
}

export default LoginPage
