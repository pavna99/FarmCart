import React from 'react';
import './Orders.css';

import { Header, Navbar} from '../../components';
import { Link } from 'react-router-dom';
import profilepic from '../../Images/profile-pic.png';
import ordercart from '../../Images/ordercart.svg';
import wishlist from '../../Images/wishlist.png';
import crown from '../../Images/crown.svg';
import truck from '../../Images/wpf_in-transit.svg';
import lemon from '../../Images/lemon.png';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import delievered from '../../Images/package-delivered.svg';
import cancel from '../../Images/canceled.png';
function Orders(props) {
    return (
        <div className='order-overall-container'>
             <div className='header1'>
                <img className='logoimage' src={bar} alt="bars"/>
                <Link to="/cart">
                <img className='images1' src={cart} alt="cart"/>
                </Link>
            </div>
            <div className='orderstitle'>My orders</div>
            
            <div className="order-1">
                    <div className='order-box-1-item'>
                        <div className='order-left'>
                                <img className='order1-pic' src={lemon} alt="lemonpic"></img>
                                
                        </div>
                        <div className='order-right'>
                            
                                <div className="leftdiv">
                                    <div className="text-wrapper">Assameese Citrus</div>
                                    <div className="text-wrapper-2">INR 350</div>
                                </div>
                                <div className="element-wrapper">
                                    <p className="element">
                                    <span className="span">02</span>
                                    <span className="text-wrapper-3">kg</span>
                                    </p>
                                </div>
                                
                            
                        </div>
                    </div>
                    
                    <div className='orderstatus'>
                        <div className="statusframe">
                                    <div className="status-wrapper">STATUS</div>
                                    <img className="in-transit" alt="Wpf in transit" src={truck} />
                                    <div className="transitdiv">In-transit</div>
                        </div>
                        <div className='totalbox'>
                            <div className="rowContainerpro">
                                <div className="rowpro">
                                    <div className="labelpro">Item Price</div>
                                    <div className="pricevaluepro">₹ 2,940.00</div>
                                </div>
                                <div className="rowpro">
                                    <div className="labelpro">Packing Charges</div>
                                    <div className="packvaluepro">₹ 20.00</div>
                                </div>
                            </div>
                            <div className="separator"></div>
                            <div className="row">
                                <div className="totalLabel">Total Amount</div>
                                <div className="totalValue">₹ 2,960.00</div>
                            </div>

                        </div>
                    </div>
                    </div>

                    <div className="order-1">
                    <div className='order-box-1-item'>
                        <div className='order-left'>
                                <img className='order1-pic' src={lemon} alt="lemonpic"></img>
                                
                        </div>
                        <div className='order-right'>
                            
                                <div className="leftdiv">
                                    <div className="text-wrapper">Assameese Citrus</div>
                                    <div className="text-wrapper-2">INR 350</div>
                                </div>
                                <div className="element-wrapper">
                                    <p className="element">
                                    <span className="span">02</span>
                                    <span className="text-wrapper-3">kg</span>
                                    </p>
                                </div>
                                
                            
                        </div>
                    </div>
                    <div className='order-box-1-item'>
                        <div className='order-left'>
                                <img className='order1-pic' src={lemon} alt="lemonpic"></img>
                                
                        </div>
                        <div className='order-right'>
                            
                                <div className="leftdiv">
                                    <div className="text-wrapper">Assameese Citrus</div>
                                    <div className="text-wrapper-2">INR 350</div>
                                </div>
                                <div className="element-wrapper">
                                    <p className="element">
                                    <span className="span">02</span>
                                    <span className="text-wrapper-3">kg</span>
                                    </p>
                                </div>
                                
                            
                        </div>
                    </div>

                    <div className='orderstatus'>
                        <div className="statusframe">
                                    <div className="status-wrapper">STATUS</div>
                                   <img className="in-transit" alt="Wpf in transit" src={delievered} />
                                    <div className="deliverdiv">Delivered</div>
                        </div>
                        <div className='totalbox'>
                            <div className="rowContainerpro">
                                <div className="rowpro">
                                    <div className="labelpro">Item Price</div>
                                    <div className="pricevaluepro">₹ 2,940.00</div>
                                </div>
                                <div className="rowpro">
                                    <div className="labelpro">Packing Charges</div>
                                    <div className="packvaluepro">₹ 20.00</div>
                                </div>
                            </div>
                            <div className="separator"></div>
                            <div className="row">
                                <div className="totalLabel">Total Amount</div>
                                <div className="totalValue">₹ 2,960.00</div>
                            </div>

                        </div>
                    </div>
                    </div>
                    <div className="order-1">
                    <div className='order-box-1-item'>
                        <div className='order-left'>
                                <img className='order1-pic' src={lemon} alt="lemonpic"></img>
                                
                        </div>
                        <div className='order-right'>
                            
                                <div className="leftdiv">
                                    <div className="text-wrapper">Assameese Citrus</div>
                                    <div className="text-wrapper-2">INR 350</div>
                                </div>
                                <div className="element-wrapper">
                                    <p className="element">
                                    <span className="span">02</span>
                                    <span className="text-wrapper-3">kg</span>
                                    </p>
                                </div>
                                
                            
                        </div>
                    </div>
                    
                    <div className='orderstatus'>
                        <div className="statusframe">
                                    <div className="status-wrapper">STATUS</div>
                                    <img className="in-transit" alt="Wpf in transit" src={cancel} />
                                    <div className="canceldiv">Canceled</div>
                        </div>
                        <div className='totalbox'>
                            <div className="rowContainerpro">
                                <div className="rowpro">
                                    <div className="labelpro">Item Price</div>
                                    <div className="pricevaluepro">₹ 2,940.00</div>
                                </div>
                                <div className="rowpro">
                                    <div className="labelpro">Packing Charges</div>
                                    <div className="packvaluepro">₹ 20.00</div>
                                </div>
                            </div>
                            <div className="separator"></div>
                            <div className="row">
                                <div className="totalLabel">Total Amount</div>
                                <div className="totalValue">₹ 2,960.00</div>
                            </div>

                        </div>
                    </div>
                    </div>


                    <Navbar/>
       
        </div>
    );
}

export default Orders;