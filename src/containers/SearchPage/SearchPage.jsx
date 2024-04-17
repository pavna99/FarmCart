import React from 'react';
import './searchpage.css'
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { Navbar, ProductComponent, SearchBar} from '../../components';

function SearchPage(props) {
    return (
        <div className='searchpage-container'>
            <div className='header2'>
                <img className='images1' src={bar} alt="bars"/>
                <SearchBar/>
                <img className='images2' src={cart} alt="cart"/>
            </div>
            <div className="searchtext">Recent Searches</div>
            <div className="recent-searches">
                <div className="mini-card-row">
                    <div className='Productbox'>
                        <ProductComponent/>
                    </div>
                    <div className='Productbox'>
                        <ProductComponent/>
                    </div>
                    <div className='Productbox'>
                        <ProductComponent/>
                    </div>
                </div>
            </div>
            <div className='searchtext'>Frequent Searches</div>
            <div className="frequent-searches">
                <div className="mini-card-row">
                    <div className='Productbox'>
                        <ProductComponent/>
                    </div>
                    <div className='Productbox'>
                        <ProductComponent/>
                    </div>
                    <div className='Productbox'>
                        <ProductComponent/>
                    </div>    
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

export default SearchPage;