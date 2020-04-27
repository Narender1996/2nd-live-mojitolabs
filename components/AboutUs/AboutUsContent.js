import React, { Component } from 'react';
import Link from 'next/link';

class AboutUsContent extends Component {
    render() {
        return (
            <section className="about-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../images/pics/aboutus.jpg")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>About Us</span>
                                <h2>Focused On Actionable Insights</h2>
                                <p>We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses.</p>

                                <ul className="about-list">
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Professional Developer Service
                                    </li>
                                   
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Specialist in Shopify
                                    </li>
                                    <li>
                                        <i className="flaticon-tick"></i>
                                        Advanced Advisory Team
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUsContent;