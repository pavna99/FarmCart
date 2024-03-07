import React from 'react'
import logo from '../../Images/logo.png';
import heroimg from '../../Images/Hero Image.png';

function SignupPage() {
  return (
    <div className='SignupPage'>
        <form action="#" method="POST">
        <h2>Signup</h2>
        <input type="text" name="username" placeholder="Username" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="password" name="password" placeholder="Password" required />
        <input type="submit" value="Signup" />
        </form>

        
    </div>
  )
}

export default SignupPage
