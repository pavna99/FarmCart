import React, { useEffect } from 'react';
import './navbar.css';
import navimg1 from '../../Images/navbarlogo1.svg';
import navimg2 from '../../Images/navbarlogo2.svg';
import navimg3 from '../../Images/navbarlogo3.svg';
import navimg4 from '../../Images/user.svg';
import { Link } from 'react-router-dom';

function Navbar() {
  useEffect(() => {
    const mySvg = document.getElementById('mySvg');
    mySvg.addEventListener('click', function() {
      const paths = mySvg.querySelectorAll('path');
      paths.forEach(path => {
        path.setAttribute('fill', '#7519EB');
        path.setAttribute('stroke', '#7519EB');
      });
    });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      mySvg.removeEventListener('click', () => {});
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div className='navbar-container'>
      <Link to='/dashboard'>
        <img src={navimg1} alt="" />
      </Link>
      <Link to='/notification'>
        <img src={navimg2} alt="" />
      </Link> 
      <Link to='/profile'>
      <svg id="mySvg" width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="user">
          <path id="Vector" d="M20.1429 21.5V19.5C20.1429 18.4391 19.7214 17.4217 18.9713 16.6716C18.2211 15.9214 17.2037 15.5 16.1429 15.5H8.14285C7.08199 15.5 6.06457 15.9214 5.31443 16.6716C4.56428 17.4217 4.14285 18.4391 4.14285 19.5V21.5" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path id="Vector_2" d="M12.1429 11.5C14.352 11.5 16.1429 9.70914 16.1429 7.5C16.1429 5.29086 14.352 3.5 12.1429 3.5C9.93371 3.5 8.14285 5.29086 8.14285 7.5C8.14285 9.70914 9.93371 11.5 12.1429 11.5Z" stroke="#888888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
      </svg>
      </Link>
      <Link to = "chat">
        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="material-symbols:chat-outline">
          <path id="Vector" d="M6.14285 14.5H14.1429V12.5H6.14285V14.5ZM6.14285 11.5H18.1429V9.5H6.14285V11.5ZM6.14285 8.5H18.1429V6.5H6.14285V8.5ZM2.14285 22.5V4.5C2.14285 3.95 2.33885 3.47933 2.73085 3.088C3.12285 2.69667 3.59352 2.50067 4.14285 2.5H20.1429C20.6929 2.5 21.1639 2.696 21.5559 3.088C21.9479 3.48 22.1435 3.95067 22.1429 4.5V16.5C22.1429 17.05 21.9472 17.521 21.5559 17.913C21.1645 18.305 20.6935 18.5007 20.1429 18.5H6.14285L2.14285 22.5ZM5.29285 16.5H20.1429V4.5H4.14285V17.625L5.29285 16.5Z" fill="#888888"/>
          </g>
        </svg>
      </Link>
        
      
    </div>
  );
}

export default Navbar;
