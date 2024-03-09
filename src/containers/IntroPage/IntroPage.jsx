import React from 'react'
import './IntroPage.css';

import { Link } from 'react-router-dom';

function IntroPage() {
  return (  
    <div className='IntroPage'>
       <div className="card-container">
            <div className='onetext'>
              <h2 className='title'>FARM FRESH  <br></br>FOR ALL .</h2>
              We love to solve sfreal world problems with design solutions that are magically<br></br> simple and useable. 
            </div>
        </div>

       <Link to="/second">
          <div className="getbutton">
            <p>SECOND PAGE</p>
          </div>
        </Link>
       
    </div>
    
  )
}

export default IntroPage
