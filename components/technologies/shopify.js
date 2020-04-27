import React, { Component } from 'react';


class shopify extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Shopify services</h3>
                                    

                                    <div className="features-text">
                                        <h4>Beautiful themes that are responsive and customizable</h4>
                                        <p>No design skills needed. You have complete control over the look and feel of your website, from its layout, to content and colors.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Trusted by over 1,000,000 businesses worldwide</h4>
                                        <p>Shopify handles everything from marketing and payments, to secure checkout and shipping</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/shopify2.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/shopify-picture-example3.gif")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>why choose shopify</h3>
                                   

                                    <div className="features-text">
                                        <h4>Pricing as low as $29/month</h4>
                                        <p>Whether you sell online, on social media, in store, or out of the trunk of your car, Shopify has you covered. Start selling anywhere for just $29/month.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Business Intelligence</h4>
                                        <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </section>
 
        );
    }
}


export default shopify;