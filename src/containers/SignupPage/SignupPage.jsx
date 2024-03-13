import React from 'react'
import { Link } from 'react-router-dom';
import './SignupPage.css'

function SignupPage() {
  return (
    <div className='signup-page-container'>
      <div className='header-section'>
        <h2 style={{'font-size':'xx-large', 'paddingBottom':10, 'fontWeight':'semibold'}}>Sign Up</h2>
        <p style={{'font-size':'small', 'fontWeight':'200'}}>Please sign up to get started</p>
      </div>
      <div className='form-container'>
        <form action="#" method="POST"> 
        <label className='labelstyles' style={{'marginTop':10}}>Name</label><br></br>
        <input className='inputfield' type="text" name="username" placeholder="Enter Your Name" required /><br></br>
        <label className='labelstyles'>Email</label><br></br>
        <input className='inputfield' type="email" name="email" placeholder="Enter Your Email" required /><br></br>
        <label className='labelstyles'>Password</label><br></br>
        <input className='inputfield' type="password" name="password" placeholder="Enter Your Password" required /><br></br>
        <label className='labelstyles'>Re-Type Password</label><br></br>
        <input className='inputfield' type="password" name="password" placeholder="Re-Type Your Password" required /><br></br>
        <Link to="/location">
          <input className='submitbtn' type="submit" value="Sign Up" />
        </Link>
        </form>
        <p style={{'font-size':'medium', 'fontWeight':'300', 'textAlign':'center'}}>Already have an account? <Link to='/login'>login instead.</Link></p>
      </div>
    </div>
  )
}

export default SignupPage
