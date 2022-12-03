import React from 'react'
import dd from '../../assets/icons8-down-25 (1).png';
import './multi.css';
import darkmode from '../../assets/darkmode (1).svg';
import col1 from '../../assets/c1-1.png'
import c2 from '../../assets/c2.png'

function handleScroll() {
    const im1 = document.querySelector('.col-2');
    const im2 = document.querySelector('.col-3');
    const scrolled = window.scrollY;

    im1.style.marginTop = `${90 - scrolled * 0.3}px`;
    im2.style.marginTop = `${-179 + scrolled * 0.35}px`;


}


window.addEventListener('scroll', handleScroll);




function Multi() {
    return (
        <div className="multi-container " >
            <div className="col-1">
                <div className="col-1-head">
                    Silicon
                </div>
                <div className="col-1-subhead">
                    Multipurpose Business /<br />
                    Technology Template
                </div>
                <div className="dark-mode">
                    <img src={darkmode} alt='' />
                </div>
                <div className="view-landing">
                    <img src={dd} alt='' /> View Landings
                </div>
            </div>
            <div className="col-2">


                <img src={col1} alt='' />
            </div>

            <div className="col-3">
                <img src={c2} alt='' />
            </div>
        </div >
    )
}

export default Multi