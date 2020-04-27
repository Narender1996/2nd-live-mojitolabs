import React, { Component } from 'react';

class magento extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>All the services you need from PHP development</h3>
                                    <p>PHP web programming essentially involves working with open source scripting languages e,g. AJAX, Javascript, jQuery etc., OS primarily Linux, server as Apache, database integration mostly MySql. It is a widely used programming language for developing dynamic, database-driven website and requires industry expertise, functional experience, and technological capabilities. Popularly it is also known as LAMP (Linux Apache MySql PHP) programming.</p>

                                    <div className="features-text">
                                        <h4>Portal Development</h4>
                                        <p>From marketplaces to online stores and from CMS based websites to online services selling portals, we have leveraged the frameworks and platforms based on PHP to deliver the portals fast and in an efficient manner.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Upgrading and Migrating</h4>
                                        <p>We help businesses to upgrade the existing application built in outdated PHP framework to the latest one and migrating it from other technology to the PHP stack. We further help them in customising their code.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/MagentoSecurityPatches-blog.gif")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/ecommerce-marketplaces2.gif")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Our PHP Application Development & PHP Programming Solutions</h3>
                                   
                                    <div className="features-text">
                                        <h4>E-commerce solutions</h4>
                                        <p>Magento, ZenCart, osCommerce, CS-Cart, Custom Shopping Carts, Online Store Front (e-shop), Payment systems and payment gateways</p>
                                    </div>


                                    <div className="features-text">
                                        <h4>Online Business application </h4>
                                        <p>ales Automation and CRM Solution, Custom B2B, B2C, C2C, C2B Solutions, QuickBooks integration, Webmail, Web Calendar, Scheduling and Calendaring Applications, Mass Mailing & News Letter Management Solutions, Order Management and Inventory solutions</p>
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

export default magento;