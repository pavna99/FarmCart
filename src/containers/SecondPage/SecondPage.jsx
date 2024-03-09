import React from "react";
import './SecondPage.css';
import { Link } from 'react-router-dom';


function SecondPage(){
    return (  
        <div className='SecondPage'>
           <div className="card-container">
                <div className='onetext'>
                  <h2 className='title'>FARM FRESH  <br></br>FOR ALL .</h2>
                  We love to solve sfreal world problems with design solutions that are magically<br></br> simple and useable. 
                </div>
            </div>
    
           <Link to="/signup">
              <div className="getbutton">
                <p>Third Page</p>
              </div>
            </Link>
           
        </div>
        
      )
}
export default SecondPage