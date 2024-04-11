import React from 'react';
import './Orderplace.css';
import { Navbar} from '../../components';
import { Link } from 'react-router-dom';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import arrow from '../../Images/Arrow 1.svg';
import orderplaced from '../../Images/orderplace.png';
function Orderplace(props) {
    return (
        <div className='orderplace-overall-container'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars" />
                <img className='images1' src={cart} alt="cart" />
            </div>
            <div className='placed-container'>
                <img className='placed' src={orderplaced} alt="placed"/>
                <h2 className='orderplacetext'>Order placed!</h2>
                <h5 className='waitmsg2'>Watch out, your order is with us.</h5>
                </div>
                <Link to="/dashboard">
                    <div className='orderbtn' >
                        
                        <div className='placeorder'>Back to Home</div>
                        <img className='back' src={arrow} alt="back"/>
                    </div>
                    </Link>
         <Navbar/>
        
        </div>
    );
}

export default Orderplace;