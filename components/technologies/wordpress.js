import React, { Component } from 'react';

class wordpress extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Wordpress Development Services</h3>
                                    <p>WordPress powers more than 23.4% of websites today
                                    Nearly every web user has either heard, seen or used WordPress
                                    Wordpress website development is the most sought after service today
                                    </p>

                                    <div className="features-text">
                                        <h4>FULLY CUSTOMIZABLE DESIGN</h4>
                                        <p>We, at Mojitolabs, offer fully customizable design for our clients to meet their marketing objectives and goals.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>FLEXIBILITY AND SCALABILITY</h4>
                                        <p>Our team of WordPress developers help you create any type of website you want – an online community, a non-profit website, a news website, a business site, personal blog, a photoblog or even a network of sites.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/service-3.gif")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/Animation.gif")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>WHY CHOOSE US?</h3>
                                   
                                    <div className="features-text">
                                        <h4>100% FULLY RESPONSIVE WEBSITE</h4>
                                        <p>We understand the challenges faced in mobile-friendly website development and have the required skills and know-how to overcome them in an effective manner. We ensure that you get a website which is compatible with every internet enabled device.</p>
                                    </div>


                                    <div className="features-text">
                                        <h4>QUALITY WORDPRESS MAINTENANCE SERVICES</h4>
                                        <p>Our WordPress maintenance services are designed to enable you to concentrate on your business while allowing us to take care and protect your website, around-the-clock, freeing you up for other significant chores.</p>
                                    </div>
                                    <div className="features-text">
                                    <h4>Custom PHP Programming</h4>
                                    <p> Online Hotel Booking and Comparison system, Online Booking & Quote Engine systems, Online multi-player games, Adwords-based and banner exchange systems, Statistics collection systems and components, Realty and Real Estate systems, Affiliate tracking systems and affiliate advertising-based systems</p>
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

export default wordpress;