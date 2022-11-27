import React from 'react'
import './Features.css'
import { BsFillBootstrapFill } from 'react-icons/bs'
import { IoDocumentTextSharp } from 'react-icons/io5'
import { BiMobile } from 'react-icons/bi'
import { MdOutlineTouchApp } from 'react-icons/md'
import { IoLogoHtml5 } from 'react-icons/io'
import { SiNodedotjs } from 'react-icons/si'
import { SiSass } from 'react-icons/si'
import { SiJavascript } from 'react-icons/si'
function Features() {
    return (
        <div className="f-container">
            <div className="f-heading">
                More Silicon Features
            </div>
            <div className="f-detail">
                <div className="f-row">
                    <div className="f-col">
                        <div className="logo">
                            <BsFillBootstrapFill className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Built with Bootstrap 5
                            </div>
                            <div className="f-desc">
                                Silicon is the powerful front-end <br />solution based on Bootstrap 5 — the <br />world’s most popular responsive, <br />mobile-first front-end component <br />library.
                            </div>
                        </div>
                    </div>

                    <div className="f-col">
                        <div className="logo">
                            <IoDocumentTextSharp className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Detailed Documentation                            </div>
                            <div className="f-desc">
                                Download package includes the<br /> documentation that covers all crucial <br />information about how to get started, <br />customize template and components <br />usage.
                            </div>
                        </div>
                    </div>

                    <div className="f-col">
                        <div className="logo">
                            <BiMobile className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Mobile Freindly Interface</div>
                            <div className="f-desc">
                                It's not a surprise that nowadays over <br />80% of users surf the inernet using <br />their mobile devices. Silicon is 100% <br />responsive and optimized for small <br />touch screens.
                            </div>
                        </div>
                    </div>


                    <div className="f-col">
                        <div className="logo">
                            <MdOutlineTouchApp className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Touch-Enabled Sliders</div>
                            <div className="f-desc">
                                In the era of touch screens it's <br />important to ensure great user <br />experience on mobile, especially when it <br />comes to such frequently used <br />interface component as slider.
                            </div>
                        </div>
                    </div>
                </div>


                <div className="f-row">

                    <div className="f-col">
                        <div className="logo">
                            <IoLogoHtml5 className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                W3C Valid HTML Code</div>
                            <div className="f-desc">
                                All HTML files are checked via W3C <br />validator to ensure 100% valid code. As <br />you probably know invalid HTML limits <br />innovation, but Silicon is innovative at <br />its core.
                            </div>
                        </div>
                    </div>

                    <div className="f-col">
                        <div className="logo">
                            <SiNodedotjs className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Kick-Start Your Development
                            </div>
                            <div className="f-desc">
                                Start your development process fast <br />and easy with Node.js and Gulp setup.<br />Configuration files are included <br />in download package. Full tasks <br />automation.
                            </div>
                        </div>
                    </div>

                    <div className="f-col">
                        <div className="logo">
                            <SiSass className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Easy to Customize with Sass                            </div>
                            <div className="f-desc">
                                Silicon is built using Sass. Easily change <br />colors, typography and <br />much more. It is <br />the most mature, stable, and powerful <br />CSS extension language in the world.
                            </div>
                        </div>
                    </div>

                    <div className="f-col">
                        <div className="logo">
                            <SiJavascript className='logo-img' />
                        </div>
                        <div className="f-content">
                            <div className="f-head">
                                Future Proof Java-Script                            </div>
                            <div className="f-desc">
                                Silicon core scripts as well as all <br />dependencies are written in vanilla JS. <br />And now with <br />Bootstrap 5 we finally <br />drop jQuery and use ES6 modules.
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Features