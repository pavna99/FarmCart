import React from 'react';
import './EmptyCart.css';
import { Navbar, SearchBar} from '../../components';
import { Link } from 'react-router-dom';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import emptycart from '../../Images/emptycart.svg';

function EmptyCart(props) {
    return (
        <div className='emptycart-overall-container'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars" />
                <img className='images1' src={cart} alt="cart" />
            </div>
            <div className='emptycart-container'>
                <img className='emptycart' src={emptycart} alt="an empty cart"/>
                <h2>Your cart is empty</h2>
                <h5 className='waitmsg'>Add items to your cart, we are waiting!</h5>
            
            <button className='shopbtn' type="submit" 
         ><Link to='/empty'>Start Shopping</Link>
         </button>
         <Navbar/>
         </div>
        </div>
    );
}

export default EmptyCart;