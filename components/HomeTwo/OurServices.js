import React, { Component } from 'react';
import Link from 'next/link';

class OurServices extends Component {
    render() {
        return (
            <section className="data-service-section pb-100">
                <div className="container">
                    <div className="section-title">
                 
                        <h2> Our  Services</h2>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="data-services-item">
                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-big-data"></i>
                                    </div>
                                    <h3>
                                        <Link href="/shopify">
                                            <a>
                                                Shopify
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-science"></i>
                                    </div>
                                    <h3>
                                        <Link href="/appdev">
                                            <a>
                                                Mobile App Development
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-document"></i>
                                    </div>
                                    <h3>
                                        <Link href="/php">
                                            <a>
                                                PHP
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>   
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="data-service-image">
                                <img src={require("../../images/data-service.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="data-services-item">
                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-data-analytics"></i>
                                    </div>
                                    <h3>
                                        <Link href="/webdevelopment">
                                            <a>
                                             Web Development
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-chart"></i>
                                    </div>
                                    <h3>
                                        <Link href="/magento">
                                            <a>
                                                Magento
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>

                                <div className="single-data-service-box"> 
                                    <div className="icon">
                                        <i className="flaticon-data"></i>
                                    </div>
                                    <h3>
                                        <Link href="/wordpress">
                                            <a>
                                                Wordpress
                                                <i className="flaticon-right"></i>
                                            </a>
                                        </Link>
                                    </h3>
                                </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default OurServices;