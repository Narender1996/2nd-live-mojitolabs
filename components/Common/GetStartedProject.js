import React, { Component } from 'react';

class GetStartedProject extends Component {
    render() {
        return (
            <section className="productive-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="productive-content">
                                <span>Let’s Get Started</span>
                                <h3>Are you ready for a better, more productive business </h3>
                                <p>Mojitolabs is a client focused Software development company in India. Whether you need custom web development or an appealing website design, Mojitolabs has the required expertise and experience to do it all.</p>

                                <div className="productive-btn">
                                    <a className="productive-btn" href="/projects">
                                        Get Started Project 
                                        <span></span>
                                    </a>
                                    <a href="/contact" className="productive-btn-one">
                                        Contact With Us
                                        <span></span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="productive-image">
                                <img src={require("../../images/productive.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default GetStartedProject;