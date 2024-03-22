import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'

function LoginPage() {
  const [data, setData] = useState({
    EmailOrUsername:'',
    password:''
  }); 

  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = ({ currentTarget: input }) => {
    setData({...data, [input.name]: input.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      EmailOrUsername: data.EmailOrUsername,
      password: data.password,
    };
  
    try {
      const url = 'https://ajayvishnu.pythonanywhere.com/api/user/login/';
      const response = await axios.post(url, userData);
      const accessToken = response.data.accessToken;

      localStorage.setItem('accessToken', accessToken);
      navigate('/location');
  
    } catch(error){
      if (error.response) {
        setError(error.response.data.message || "An error occurred during registration.");
      }
    }
  };
  return (
    <div className='signup-login-page-container'>
        <div className='header-section'>
            <h2 style={{'font-size':'xx-large', 'paddingBottom':10, 'fontWeight':'semibold'}}>Log In</h2>
            <p style={{'font-size':'small', 'fontWeight':'200'}}>Please sign in to your existing account</p>
        </div>
        <div className='form-container'>
            <form onSubmit={handleSubmit} method="POST"> 
            <label className='labelstyles'>Username or Email</label><br></br>
            <input className='inputfield' type="text" name="EmailOrUsername" value={data.EmailOrUsername} onChange={handleChange} placeholder="Enter Your Email" required /><br></br>
            <label className='labelstyles'>Password</label><br></br>
            <input className='inputfield' type="password" name="password" value={data.password} onChange={handleChange} placeholder="Enter Your Password" required /><br></br>
            <input className='checkbox1' type='checkbox' name="rememberme" />
            <label style={{'margin':'0 0 0 4px', 'textAlign':'center'}} className='labelstyles'>Remember Me</label>
            <label className='fplabel'>Forgot Password</label>
            {error && <div>{error}</div>} 
            <button className='submitbtn' type="submit" >Log In</button>
            </form> 
            <p style={{'font-size':'medium', 'fontWeight':'300', 'textAlign':'center'}}>Don't have an account? <Link to='/signup'>Sign Up here.</Link></p>
        </div>
    </div>
  )
}

export default LoginPage
