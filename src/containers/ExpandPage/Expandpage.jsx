import React from 'react';
import './Expandpage.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import details from '../../Images/Group 94 (1).png';
import farmdetails from '../../Images/Group 94 (3).png';
import farmerdetails from '../../Images/Frame 34.png';
function Expandpage(props) {
    return (
        <div className='expand-overall-container'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars"/>
                <img className='images1' src={cart} alt="cart"/>
            </div>
            <img className='images3' src={details} alt="expansion"/>
            <div className='popdiv'>
                    This armchair is an elegant and functional piece of furniture. It is suitable for family visits and parties with friends and perfect for relaxing in front of the TV after hard work.
                <h3>farm details</h3>
                <img className='images4' src={farmdetails} alt="expansion"/>
                <h3>About farmer</h3>
                <img className='images5' src={farmerdetails} alt="expansion"/>
            </div>
        </div>
    );
}

export default Expandpage;