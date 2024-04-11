import React from 'react';
import { Header, Navbar} from '../../components';
import { Link } from 'react-router-dom';
import './ProfilePage.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import profilepic from '../../Images/profile-pic.png';
import ordercart from '../../Images/ordercart.svg';
import wishlist from '../../Images/wishlist.png';
import crown from '../../Images/crown.svg';
import truck from '../../Images/wpf_in-transit.svg';
import lemon from '../../Images/lemon.png';
import delievered from '../../Images/package-delivered.svg';
function ProfilePage(props) {
    return (
        <div className='Profile-overall-component'>
            <div className='header1'>
                <img className='images1' src={bar} alt="bars"/>
                <img className='images1' src={cart} alt="cart"/>
            </div>
            <div className='profile-container'>
                <div className='profile-box'>
                    <div className="pic">
                        <img className="ellipse" alt="Ellipse" src={profilepic} />
                    </div>
                    <div className='profile-about'>
                        <p className='profile-name'>Enric S neelamkavil</p>
                        <p className='profile-email'>enricsneelamkavil@gmail.com</p>
                    </div>
                </div>

                <div className="profile-btns">
                    <div className="Group97">
                        <div className="button-box" />
                            <div className="Frame48096276">
                            
                                <img className='vector' src={ordercart} alt="cart"/>
                                <div className="Orders">Orders</div>
                            </div>
                        </div>
                    <div className="Group98">
                        <div className="button-box" />
                        <div className="Frame48096277">
                        <img className='vector' src={wishlist} alt="heart"/>
                        <div className="Wishlist">Wishlist</div>
                        </div>
                    </div>
                </div>

                <div className="explorebtn">
                    <img src={crown} alt="crown"></img>
                    <div className='explore'>
                    Explore Farm Cart Premium
                    </div>
                </div>

                <div className='recent-order'>
                Recent orders
                </div>

                <div className="order-box-1">
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
                    <div className="order-box-1">
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
                                    <div className="transitdiv">Delivered</div>
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

                <Link to="/login">
                <button className='logoutbtn' type="submit">
                    Logout
                </button></Link>
            <Navbar/>
            </div>
        </div>
    );
}

export default ProfilePage;