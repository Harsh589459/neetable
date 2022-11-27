import React from 'react'
import silogo from '../../assets/silogo.svg'
import dd from '../../assets/dd.png';
import './Navbar.css';

function Navbar() {
    return (
        <div>
            <div className="nav-container">
                <div className="nav-content">
                    <div className="nav-logo">
                        <img src={silogo} alt='' style={{ width: '47px', height: '47px' }} />
                        <span>Silicon</span>
                    </div>
                    <div className="nav-drop">
                        <div className="dropdown">
                            <div className="dropbtn" style={{ color: '#4d5171' }}>
                                Landings <img src={dd} alt='' />
                                < div className="dropdown-content">
                                    <ul>
                                        <li>Template Intro Pages</li>
                                        <li>Mobile App Showcase</li>
                                        <li>Mobile&nbsp;App&nbsp;ShowCase&nbsp;v.2</li>
                                        <li>Startup <button style={{
                                            backgroundColor: 'rgb(110, 196, 110)', color: '#ffffff'
                                            , border: 'none', borderRadius: '5px'
                                        }}>New</button></li>
                                        <li>SaaSv.1</li>
                                        <li>SaaSv.2</li>
                                        <li>SaaSv.3</li>
                                        <li>Financial Consulting</li>
                                        <li>Medical</li>

                                    </ul>
                                    <ul>
                                        <li>IT(Software)&nbsp;Company</li>
                                        <li>Conference</li>
                                        <li>Digital Agency</li>
                                        <li>Blog Homepage</li>

                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="dropdown">
                            <div className="dropbtn">
                                Pages <img src={dd} alt='' className='d-img' />
                                <div className="dropdown-content">
                                    <ul>
                                        <li>About</li>
                                        <li>About v.1</li>
                                        <li>About v.2</li>
                                        <li>Services</li>
                                        <li>Services v.1</li>
                                        <li>Services v.2</li>
                                        <li>ServiceDetails&nbsp;v.1</li>
                                        <li>ServiceDetails v.2</li>


                                    </ul>
                                    <ul>
                                        <li>Blog</li>
                                        <li>List&nbsp;View&nbsp;with&nbsp;Sidebar</li>
                                        <li>Grid View with Sidebar</li>
                                        <li>List View no Sidebar</li>
                                        <li>Grid View no Sidebar</li>
                                        <li>Simple Feed</li>
                                        <li>Single Post</li>
                                        <li>Podcast</li>

                                    </ul>
                                    <ul>
                                        <li>Pricing</li>
                                        <li>Pricing&nbsp;Pages</li>
                                        <li>Contacts</li>
                                        <li>Contacts v.1</li>
                                        <li>Contacts v.2</li>
                                        <li>Contacts v.3</li>
                                        <li>Speciality</li>
                                        <li>404 Error v.1</li>
                                        <li>404 Error v.2</li>
                                    </ul>
                                </div>

                            </div>

                        </div>


                        <div className="dropdown">
                            <div className="dropbtn">
                                Portfolio <img src={dd} alt='' />
                                <div className="dropdown-content">
                                    <ul>
                                        <li>Grid View</li>
                                        <li>List View</li>

                                        <li>Slider View</li>
                                        <li>Single&nbsp;Project</li>
                                    </ul>

                                </div>

                            </div>


                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">
                                Support
                            </div>
                        </div>
                        <div className="dropdown">
                            <div className="dropbtn">
                                Docs
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Navbar
