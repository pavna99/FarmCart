import React from 'react'
import image from '../../Images/image 12.png';
import { Link } from 'react-router-dom';

function IntroPage() {
  return (  
    <div className='IntroPage'>
       <img src={image} className='Main' alt="screen"/>
       <Link to="/signup">
          <div className="getbutton">
            <p>hohosignup</p>
          </div>
        </Link>
       
    </div>
    
  )
}

export default IntroPage
