import React from 'react'
import './Footer.css'
import { MdOutlineMail } from 'react-icons/md';
import { AiOutlineHeart } from 'react-icons/ai';

function Footer() {
    return (
        <div className="foot-container">
            <div className="foot-heading">
                Subscribe to Our Newsletter
            </div>
            <div className="foot-input">
                <MdOutlineMail className='place-logo' />
                <input type='text'
                    placeholder=" Your email"
                    className='input'

                />
                <button>Subscribe</button>


            </div>
            <div className="rights">

                © All rights reserved. Made with  by <AiOutlineHeart /> MadrasThemes
            </div>
        </div>
    )
}

export default Footer;