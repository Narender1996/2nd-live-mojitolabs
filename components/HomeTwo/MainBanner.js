import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class MainBanner extends Component {
    render() {
        return (
            <div className="main-banner-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="main-banner-content">
                                        <h1> Perfection and simplicity</h1>
                                        <p>Mojitolabs is a client focused Software development company in India. Whether you need custom web development or an appealing website design, Mojitolabs has the required expertise and experience to do it all.</p>

                                        <div className="banner-btn">
                                            <Link href="/about-us">
                                                <a className="default-btn-one">
                                                    About Us
                                                    <span></span>
                                                </a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="default-btn">
                                                    Contact Us 
                                                    <span></span>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        {/* Shape images */}

                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='fadeInUp' delay='1s'>
                                            <img src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW animation='rotateIn' delay='1s'>
                                            <img src={require("../../images/home-two/image.png")} alt="image" />
                                        </ReactWOW>

                                        {/* Main image */}
                                        <ReactWOW animation='zoomIn' delay='1s'>
                                            <img src={require("../../images/home-one/main-image1.png")} alt="image" />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="creative-shape">
                    <img src={require("../../images/main-banner-shape/main-banner-shape1.png")} alt="main-image" />
                </div>
                <div className="shape-img1">
                    <img src={require("../../images/main-banner-shape/main-banner-shape2.png")} alt="main-image" />
                </div>
                <div className="shape-img2">
                    <img src={require("../../images/main-banner-shape/main-banner-shape3.png")} alt="main-image" />
                </div>

                {/* Animation lines */}
                <div className="lines">
                    <div className="line"></div>
                    <div className="line"></div>
                    <div className="line"></div>
                </div>
            </div>
        );
    }
}

export default MainBanner;