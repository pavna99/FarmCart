import React from 'react';
import './CartPage.css';
import { Navbar} from '../../components';
import { Link } from 'react-router-dom';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import product from '../../Images/listone.png';
import { useState } from 'react';

function CartPage(props) {
    const [counter, setCounter] = useState(0);
  
    // Increase counter
    const increase = () => {
      setCounter(count => count + 1);
    };
  
    // Decrease counter
    const decrease = () => {
        
      setCounter(count => count - 1);
    };
    const handleClick = () => {
        // Hide the button
        document.getElementById("deleteBtn").style.display = "none";
    };
    
      
    return (
        <div className='cart-overall-container'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars" />
                <img className='images1' src={cart} alt="cart" />
            </div>
            <div  className='cartlist'>
                <div id="deleteBtn" className='listitem'>
                        <img  className="proimage" src={product} alt="image1"/>
                        <div className='itemdetails'>
                        <div className='itemname'>Bhutan Pomegranate</div>
                        <div className='itemprice'>INR 350</div>
                        <div className='quantitydesc'>
                            <div className='quantity'>Quantity (in kgs)
                            </div>
                            

                        </div>

                        </div>
                        <div className='rightbtns'>
                        
                            <button  className='deletebtn' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#7519EB"/>
                                <path d="M12.6666 6.33334L6.33331 12.6667" stroke="white" stroke-width="1.40741" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.33331 6.33334L12.6666 12.6667" stroke="white" stroke-width="1.40741" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            
                            <div className="btn__container">
                                    <button className="control__btn" onClick={decrease}>-</button>
                                    <span className="counter__output">{counter}</span>
                                    <button className="control__btn" onClick={increase}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='listitem2'>
                        <img  className="proimage" src={product} alt="image1"/>
                        <div className='itemdetails'>
                        <div className='itemname'>Bhutan Pomegranate</div>
                        <div className='itemprice'>INR 350</div>
                        <div className='quantitydesc'>
                            <div className='quantity'>Quantity (in kgs)
                            </div>
                            

                        </div>

                        </div>
                        <div className='rightbtns'>
                        
                            <button  className='deletebtn' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#7519EB"/>
                                <path d="M12.6666 6.33334L6.33331 12.6667" stroke="white" stroke-width="1.40741" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.33331 6.33334L12.6666 12.6667" stroke="white" stroke-width="1.40741" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            
                            <div className="btn__container">
                                    <button className="control__btn" onClick={decrease}>-</button>
                                    <span className="counter__output">{counter}</span>
                                    <button className="control__btn" onClick={increase}>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='listitem2'>
                        <img  className="proimage" src={product} alt="image1"/>
                        <div className='itemdetails'>
                        <div className='itemname'>Bhutan Pomegranate</div>
                        <div className='itemprice'>INR 350</div>
                        <div className='quantitydesc'>
                            <div className='quantity'>Quantity (in kgs)
                            </div>
                            

                        </div>

                        </div>
                        <div className='rightbtns'>
                        
                            <button  className='deletebtn' onClick={handleClick}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                                <circle cx="9.5" cy="9.5" r="9.5" fill="#7519EB"/>
                                <path d="M12.6666 6.33334L6.33331 12.6667" stroke="white" stroke-width="1.40741" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6.33331 6.33334L12.6666 12.6667" stroke="white" stroke-width="1.40741" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            
                            <div className="btn__container">
                                    <button className="control__btn" onClick={decrease}>-</button>
                                    <span className="counter__output">{counter}</span>
                                    <button className="control__btn" onClick={increase}>+</button>
                            </div>
                        </div>
                    </div>
                
            </div><Link to='/checkoutpage'>
            <button className='checkbtn' type="submit" >
                Checkout
            </button></Link>
            <Navbar/>
            
        </div>
    );
}

export default CartPage;