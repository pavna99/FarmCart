import React, { useState, useEffect } from 'react';
import './Search.css';

function SearchBar(props) {
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        // Implement any logic for fetching frequent and recent searches here
        // For now, let's assume they are stored in state variables
    }, []);

    return (
        <div className='search-box3' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                <div className="search-btn2">
                    <i className="fas fa-search"></i>
                </div>
                <input className="search-text2" type="text" placeholder="Search" />
            </div>            
    );
}

export default SearchBar;
