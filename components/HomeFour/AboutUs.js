import React, { Component } from 'react';
import Link from 'next/link';

class AboutUs extends Component {
    render() {
        return (
            <section className="about-section pb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../images/pics/about.jpg")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>Focused On Actionable Insights</h2>
                                <p>We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses.
                                CONTACT US</p>
                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Professional Consultancy Service
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        24/7 Support Center
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Custom Service & Operation
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Advanced Advisory Team
                                    </li>
                                </ul>
                                
                                <Link href="/about-us">
                                    <a className="default-btn">
                                        Read More <span></span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;