import React, { useState, useEffect } from 'react';
import './Search.css';
import cart from '../../Images/shopping-cart.svg';
import bar from '../../Images/Bar.png';
import { Navbar,ProductComponent } from '..';

function SearchBar(props) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Implement any logic for fetching frequent and recent searches here
        // For now, let's assume they are stored in state variables
    }, []);

    return (
        <div className='seemore-overall-container'>
            <div className='header2'>
                <img className='images1' src={bar} alt="bars" />
                <div className='search-box3' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <div className="search-btn2">
                            <i className="fas fa-search"></i>
                        </div>
                        <input className="search-text2" type="text" placeholder="Search" />
                 </div>
               
            </div>
            
            
            <Navbar />
        </div>
    );
}

export default SearchBar;
