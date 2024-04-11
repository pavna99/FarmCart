import React from 'react';
import './Header.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        <div className='header-overall-container'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars" />
                <Link to='cart'>
                <img className='images1' src={cart} alt="cart" />
                </Link>
            </div>
            
        </div>
    );
}

export default Header;