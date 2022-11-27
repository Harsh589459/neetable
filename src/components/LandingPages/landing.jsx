import React from 'react'
import './landing.css';
import showcase from '../../assets/app-showcase.jpg'
import saasv1 from '../../assets/saas-v1.jpg'
import saasv2 from '../../assets/saas-v2.jpg'
import financialcosulting from '../../assets/financial.jpg'
import medical from '../../assets/medical.jpg'
import digitalagency from '../../assets/digital-agency.jpg'
import conference from '../../assets/conference.jpg'
import software from '../../assets/software-company.jpg'
import blog from '../../assets/blog-homepage.jpg'


function Landing() {
    return (
        <div className="l-container">
            <div className="l-heading">
                Landing Pages
            </div>
            <div className="l-subheading">
                Choose from pre-built layouts of our unique landing pages
            </div>
            <div className="l-images">
                <div className="l-row">
                    <div className="l-col">
                        <img src={showcase} alt='' />
                        <div className="img-content">
                            Mobile App Showcase
                        </div>
                    </div>
                    <div className="l-col">
                        <img src={saasv1} alt='' />
                        <div className="img-content">
                            Saas v.1
                        </div>
                    </div>
                    <div className="l-col">
                        <img src={saasv2} alt='' />
                        <div className="img-content">
                            Saas v.2
                        </div>
                    </div>

                </div>


                <div className="l-row">

                    <div className="l-col">
                        <img src={financialcosulting} alt='' />
                        <div className="img-content">
                            Financial Consulting
                        </div>
                    </div>
                    <div className="l-col">
                        <img src={medical} alt='' />
                        <div className="img-content">
                            Medical
                        </div>
                    </div>

                    <div className="l-col">
                        <img src={digitalagency} alt='' />
                        <div className="img-content">
                            Digital Agency
                        </div>
                    </div>

                </div>


                <div className="l-row">
                    <div className="l-col">
                        <img src={conference} alt='' />
                        <div className="img-content">
                            Conference
                        </div>
                    </div>
                    <div className="l-col">
                        <img src={software} alt='' />
                        <div className="img-content">
                            IT (Software) Company
                        </div>
                    </div>
                    <div className="l-col">
                        <img src={blog} alt='' />
                        <div className="img-content">
                            Blog Homepage
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Landing