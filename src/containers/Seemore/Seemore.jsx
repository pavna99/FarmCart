import React from 'react';
import './Seemore.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { Navbar,ProductComponent} from '../../components'
function Seemore(props) {
    return (
        <div className='seemore-overall-container'>
            <div className='header2'>
                <img className='images1' src={bar} alt="bars"/>
                <div class = 'search-box2'>
                    <div class = "search-btn2">
                        <i class="fas fa-search"></i>
                    </div>
                    <input class = "search-text2" type="text" placeholder = "Search" />
            
                </div>
                <img className='images2' src={cart} alt="cart"/>
            </div>
            <div className='Productlist'>
                    <div className='Productcompset2'>
                        <div className='Productbox'>
                            <ProductComponent/>
                        </div>
                        <div className='Productbox'>
                            <ProductComponent/>
                        </div>
                    </div>
                    <div className='Productcompset2'>
                        <div className='Productbox'>
                            <ProductComponent/>
                        </div>
                        <div className='Productbox'>
                            <ProductComponent/>
                        </div>
                    </div>
                    <div className='Productcompset2'>
                        <div className='Productbox'>
                            <ProductComponent/>
                        </div>
                        <div className='Productbox'>
                            <ProductComponent/>
                        </div>
                    </div>
            </div>
            <Navbar/>
        </div>
    );
}

export default Seemore;