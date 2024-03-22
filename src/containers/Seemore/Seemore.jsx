import React from 'react';
import './Seemore.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { Navbar,ProductComponent, SearchBar} from '../../components'
import { Link } from 'react-router-dom';
function Seemore(props) {
    return (
        <div className='seemore-overall-container'>
            <div className='header2'>
                <img className='images1' src={bar} alt="bars"/>
                <SearchBar/>
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