import React from 'react'
import './IntroPage.css';
import card1 from '../../Images/card.svg'; 
import { Link } from 'react-router-dom';

function IntroPage() {
  return (  
    <div className='IntroPage'>
       <div className="card-container">
            <div className='onetext'>
              <h2 style={{color:'#7519EB'}}>FARM FRESH FOR <br></br>ALL</h2>
              We love to solve sfreal world problems with design solutions that are magically simple and useable. 
            </div>
          
      </div>
       <Link to="/signup">
          <div className="getbutton">
            <p>hohosignup</p>
          </div>
        </Link>
       
    </div>
    
  )
}

export default IntroPage
