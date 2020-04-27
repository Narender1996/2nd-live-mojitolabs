import React, { Component } from 'react';
import Link from 'next/link';


class appdev extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="tab-section ptb-100">
                <div className="container">
                    <div className="tab solutions-list-tab">
                        {/* Tabs Nav */}
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>IOS</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                <span>Android</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                <span>React Native</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                <span>Phonegap</span>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab_content">
                            {/* Tabs item 1 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>All the services you need in iOS</h3>
                                            <p>The iOS platform is loved by all Apple users, designing apps for the iPhone seems a natural thing to do.!

                                            Among the many iPhone apps development companies, we stand on our own. Our creativity and understanding of the iOS platform goes a long way to create apps designed for this niche – so that your user base gets apps that are friendly and easy to use. We are always up to date with technology, so you need not worry about iPhone Application Development at all.</p>

                                            <h5>Our IOS development services:</h5>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    iPhone and iPad Application Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    mCommerce Applications
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Travel, Navigation, Social Networking and Mobile Security Apps
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Mobile Websites, Widget and Theme Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Maintenance, Support, Migration and Testing of existing apps
                                                </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="tab-image-right">
                                            <img src={require("../../images/pics/ios7-animation.gif")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 2 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image-left">
                                            <img src={require("../../images/pics/unnamed.gif")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>All the services you need in android</h3>
                                            <p>We provide a feature rich development environment by offering a rich combination of media support and optimized graphics.

                                            Our offshore android application development services are charged affordably and are backed by experienced experts and proficient android programmers. With us, you can be assured of world class services with the highest probability of 100% success rate. It is you who possess the power to use the application as per your discretion.</p>

                                            <h5>Our Android development services</h5>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Android app development..
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Android Mobile and Web Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Android Utility and Business App Development
                                                </li>
                                                <li>
                                                <i className="flaticon-tick-1"></i>
                                                Maintenance, Support and Migration of existing Android apps
                                            </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 3 */}
                            <div id="tab3" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Strong performance for mobile environments</h3>
                                            <p>Our React native team leverage all the technological enhancements of React community and put them into benefits of our customers.

                                            From small and simple mobile application development to multi-platform projects, we have the experience and expertise to turn your idea into reality. Our potentials and dedication to develop user-friendly and high-end react native applications take our initiative to the next level. We have developed innovative techniques for various fields including business, travel, entertainment, sports, finance and lots more. Indeed, we are here to provide a comprehensive react native application development services to efficiently meet all your requirements. With us, you are ensured to get interactive services at the best possible means.</p>

                                            <h5>Our React Native development services:</h5>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    React Native Application Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Utility and Business App Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Multimedia Application Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Real-time chat applications
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    React Native eCommerce application
                                                </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-5">
                                        <div className="tab-image-right">
                                            <img src={require("../../images/pics/Mobile-App.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 4 */}
                            <div id="tab4" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image-left">
                                            <img src={require("../../images/pics/phonegap-camera-plugin.gif")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Easy and rapidly build hybrid mobile applications.</h3>
                                            <p>Phonegap is the best technology to get early market feedbacks of your business idea with lower cost. We help you in building a quick minimal viable product to know your customer reactions.

                                            We provide a feature rich development environment by offering a rich combination of media support and optimized graphics. Our offshore phonegap development services are charged affordably and are backed by experienced experts and proficient phonegap programmers. With us, you can be assured of world class services with the highest probability of 100% success rate. It is you who possess the power to use the application as per your discretion.
                                            
                                            Our phonegap development services:
                                            
                                             Phonegap Application Development
                                             Utility and Business App Development
                                             Multimedia Application Development
                                             Phonegap eCommerce application
                                             Migration and Testing of existing apps into Phonegap
                                             Phonegap eLearning Games
                                             Real-time chat applications
                                            </p>

                                            <h5>Our phonegap development services:</h5>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Phonegap Application Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Utility and Business App Development
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Multimedia Application Development

                                                </li>
                                                <li>
                                                <i className="flaticon-tick-1"></i>
                                                Migration and Testing of existing apps into Phonegap

                                            </li>
                                            <li>
                                            <i className="flaticon-tick-1"></i>
                                            Phonegap eLearning Games

                                        </li>
                                            </ul>

                                            <div className="tab-btn">
                                                <Link href="#">
                                                    <a className="default-btn">
                                                        Read More <span></span>
                                                    </a>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default appdev;