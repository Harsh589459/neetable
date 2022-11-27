import React from 'react'
import envato from '../../assets/envato.svg';
import './envato.css';

function Envato() {
    return (
        <div className="e-container">
            <img src={envato} alt='' />
            <div className="buy">
                Buy Now
            </div>
        </div>
    )
}

export default Envato