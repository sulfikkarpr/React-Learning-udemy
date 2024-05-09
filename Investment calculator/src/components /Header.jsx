import React from 'react';
import header_image from "../assets/investment-calculator-logo.png";

function Header() {
    console.log(header_image);
    return (
        <div id='header'>
            <img src={header_image} alt='header - image' />
            <h1>Investment Calculator</h1>
        </div>
    )
}

export default Header