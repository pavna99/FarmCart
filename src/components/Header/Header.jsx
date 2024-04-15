import React, { useState, useEffect }  from 'react';
import './Header.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { useNavigate } from 'react-router-dom';


function Header(props) {
    const navigate = useNavigate(); 
    const cartButton = (event) => {
        navigate('/cart');
    }

    return (
        <div className='header-overall-container'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars" />
                
                <img onClick={cartButton} className='cartimage' src={cart} alt="cart" />
                
            </div>
            
        </div>
    );
}

export default Header;