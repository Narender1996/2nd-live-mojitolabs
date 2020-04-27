import React, { Component } from 'react';
import Link from 'next/link';


class wordpress extends Component {

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
                                <span>WORDPRESS</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab2')}>
                                <span>WORDPRESS</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab3')}>
                                <span>WORDPRESS</span>
                            </li>

                            <li onClick={(e) => this.openTabSection(e, 'tab4')}>
                                <span>WORDPRESS</span>
                            </li>
                        </ul>

                        {/* Tab Content */}
                        <div className="tab_content">
                            {/* Tabs item 1 */}
                            <div id="tab1" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Shopify</h3>
                                            <p>Shopify is a subscription to a software service that offers you to create a website and use their shopping cart solution to sell, ship, and manage your products. Using their service, you can get access to easy to use admin panel where you can add products, process orders and enter store data</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Innovation idea the latest business technology
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Safe secure services for your online email account
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Digital content marketing online
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
                                            <img src={require("../../images/pics/shopify.png")} alt="image" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tabs item 2 */}
                            <div id="tab2" className="tabs_item">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="tab-image-left">
                                            <img src={require("../../images/pics/wd.jpg")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Web Development</h3>
                                            <p>We understand successful software solutions need bright ideas effectively implemented. Its not just about handling complex business logic’s, we go extra mile to simplify the whole process so that anybody can easily use it. Here are some of the web developement services we provide to our customers:</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Product Engineering
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    E-Commerce Store
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Enterprise Application Development
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
                                            <h3>Mobile App Development</h3>
                                            <p>From developing native apps for Android and iOS platform to utilising modern technologies like React Native, we have extensive experience in developing mobile applications for both the platforms.</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Innovation idea the latest business technology
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Safe secure services for your online email account
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Digital content marketing online
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
                                            <img src={require("../../images/pics/wordpress.png")} alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-lg-7">
                                        <div className="tab-solution-content">
                                            <h3>Wordpress</h3>
                                            <p>Mojitolabs has used WordPress extensively for creating all kinds of websites ranging from small blogging websites to large websites with hundreds of web pages. Our experienced WordPress website developers have created many add-ons by utilizing the extensible nature of WordPress. Our WordPress developers not only create a website but also optimize it for the search engines. We enjoy innovating new tools for developing best possible websites for our clients.</p>

                                            <ul className="tab-list">
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    WordPress powers more than 23.4% of websites today
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Nearly every web user has either heard, seen or used WordPress
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick-1"></i>
                                                    Wordpress website development is the most sought after service today

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

export default wordpress;