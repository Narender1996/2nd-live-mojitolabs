import React, { Component } from 'react';

class FeaturedService extends Component {
    render() {
        return (
            <section className="software-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="software-content">
                                <span>Our Services</span>
                                <h2>Software Developement Services</h2>
                                <p></p>

                                <ul className="features-list">
                                    <li>
                                        <span>Shopify</span>
                                    </li>
                                    <li>
                                        <span>Web Developement</span>
                                    </li>
                                    <li>
                                        <span>Wordpress</span>
                                    </li>
                                    <li>
                                        <span>Woocommerce</span>
                                    </li>
                                    <li>
                                        <span>PHP</span>
                                    </li>
                                    <li>
                                        <span>Angular js</span>
                                    </li>
                                    <li>
                                        <span>HTML&CSS</span>
                                    </li>
                                    <li>
                                        <span> App Developement</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="software-image">
                                <img src={require("../../images/pics/work3.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturedService;