import React, { useState } from 'react'
import { Link, useNavigate} from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css'
import { NotificationPopup } from '../../components';


function SignupPage() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password1: '',
    password2: '',
    role:'Farmer'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.password1 !== data.password2) {
      setError("Passwords do not match.");
      return;
    }
    const userData = {
      username: data.username,
      email: data.email,
      password: data.password1,
      role:'Farmer'
    };
    try {
      const url = 'https://ajayvishnu.pythonanywhere.com/api/user/register/';
      await axios.post(url, userData);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 5000);
      navigate('/login');
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || "An error occurred during registration.");
      }
    }
  };

  return (
    <div className='signup-login-page-container'>
      <div className='header-section'>
        <h2 style={{'fontSize':'xx-large', 'paddingBottom':10, 'fontWeight':'semibold'}}>Sign Up</h2>
        <p style={{'fontSize':'small', 'fontWeight':'200'}}>Please sign up to get started</p>
      </div>
      <div className='form-container'>
        <form onSubmit={handleSubmit} method="POST"> 
        <label className='labelstyles' style={{'marginTop':10}}>Name</label><br></br>
        <input className='inputfield' type="text" name="username" value={data.username} onChange={handleChange} placeholder="Enter Your Name" required /><br></br>
        <label className='labelstyles'>Email</label><br></br>
        <input className='inputfield' type="email" name="email" value={data.email} onChange={handleChange}  placeholder="Enter Your Email" required /><br></br>
        <label className='labelstyles'>Password</label><br></br>
        <input className='inputfield' type="password" name="password1" value={data.password1} onChange={handleChange}  placeholder="Enter Your Password" required /><br></br>
        <label className='labelstyles'>Re-Type Password</label><br></br>
        <input className='inputfield' type="password" name="password2" value={data.password2} onChange={handleChange}  placeholder="Re-Type Your Password" required /><br></br>
        {error && <div>{error}</div>}
        <button className='submitbtn' type="submit" >Sign Up</button>
        </form>
        <p style={{'font-size':'medium', 'fontWeight':'300', 'textAlign':'center'}}>Already have an account? <Link to='/login'>login instead.</Link></p>
        {showNotification && <NotificationPopup message="User created please login" onClose={() => setShowNotification(false)} />}</div>
    </div>
  )
}

export default SignupPage
