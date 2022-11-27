import React from 'react'
import './motion.css'
import motion from '../../assets/selection.svg';
import light from '../../assets/LightDark.svg';
import figma from '../../assets/figma.svg';
import free from '../../assets/free.svg';

function Motion() {
    return (
        <div className="motion-container">
            <div className="m-box">
                <img src={light} alt='' />
                <div className="m-heading">
                    Light / Dark Mode
                </div>
            </div>

            <div className="m-box">
                <img src={figma} alt='' />
                <div className="m-heading">
                    Figma Files Included
                </div>
            </div>

            <div className="m-box">
                <img src={motion} alt='' />
                <div className="m-heading">
                    100+ UI Flexible Sections
                </div>
            </div>

            <div className="m-box">
                <img src={free} alt='' />
                <div className="m-heading">
                    Free LifeTime Updates
                </div>
            </div>
        </div>
    )
}

export default Motion