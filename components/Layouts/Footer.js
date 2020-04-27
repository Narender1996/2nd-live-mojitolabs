import React, { Component } from 'react';
import Link from 'next/link';

class Footer extends Component {
    render() {

        let currentYear = new Date().getFullYear();

        return (
            <React.Fragment>
                {/* Top Footer Section */}
                <footer className="footer-section ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>About Us</h3>
                                    </div>
                                    <p>We are a digital technology company providing end-to-end product development services. We leverage the power of experience design, cutting-edge engineering, and cloud to build disruptive web and mobile apps enabling digital transformation for businesses.</p>

                                    <ul className="footer-social">
                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-pinterest"></i>
                                                </a>
                                            </Link>
                                        </li>

                                        <li>
                                            <Link href="#">
                                                <a>
                                                    <i className="fab fa-linkedin"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Important Links</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/about-us">
                                                <a>About Us</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/projects">
                                                <a>Projects</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="services">
                                                <a>Services</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/team">
                                                <a>Team</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/contact">
                                                <a>Contact</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Featured Service</h3>
                                    </div>

                                    <ul className="footer-quick-links">
                                        <li>
                                            <Link href="/shopify">
                                                <a>Shopify</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/webdevelopment">
                                                <a>Web development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/appdev">
                                                <a>Mobile App Development</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/php">
                                                <a>PHP</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/wordpress">
                                                <a>Wordpress</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>    
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-footer-widget">
                                    <div className="footer-heading">
                                        <h3>Contact Info</h3>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-call-answer"></i>
                                        <h3>Phone</h3>
                                        <span>
                                            +91 7827537259
                                        </span>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-envelope"></i>
                                        <h3>Email</h3>
                                        <span>
                                            contact@mojitolals.com
                                        </span>
                                    </div>

                                    <div className="footer-info-contact">
                                        <i className="flaticon-maps-and-flags"></i>
                                        <h3>Address</h3>
                                        <span> N-3/28A, DLF Phase-2 Near Cyber-City Gurgaon Haryana - 122002 India</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lines">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>

                    <div className="partner-shape-img1">
                        <img src={require("../../images/pics/footer.jpg")} alt="image" />
                    </div>
                </footer>
                {/* End Top Footer Section */}

                {/* Bottom Footer Section */}
                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p> 
                                    &copy; {currentYear} Mojitolab All Rights Reserved by

                                    <a href="https://mojitolabs.com/" target="_blank">
                                        Mojitolab
                                    </a>
                                </p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul>
                                    <li>
                                        <Link href="/terms-condition">
                                            <a>
                                                Terms & Conditions
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Bottom Footer Section */}
            </React.Fragment>
        );
    }
}

export default Footer;