import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationButton({ destination, buttonText, class_name }) {
    const navigate = useNavigate();  
    const handleButtonClick = () => {
        navigate(destination); 
    };

    return (
        <button className={class_name} onClick={handleButtonClick} type='submit'>{buttonText}</button>  
    );
}

export default NavigationButton;
