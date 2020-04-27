import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <section className="services-details-area ptb-100">
                <div className="container">
                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>ANDROID APP DEVELOPMENT SERVICES</h3>
                                    <p>Over more than a decade on the market, Intellectsoft has gained a reputation of one of the most reliable Android app development companies. Whether you a need an app for an Android smartphone, wearable, or TV, we can help you build a solid solution that works on every device regardless of brand and your industry of operation.</p>

                                    <div className="features-text">
                                        <h4>DEVELOPMENT FROM A TO Z</h4>
                                        <p>Our experts know every corner of the Android platform, down to its core. We have the experience of working with every Android device type, brand, and custom ecosystem. Our Android app development services will give you a reliable product that appeals to the platform’s users.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Android App Marketing</h4>
                                        <p>In the competing market of mobile apps, an extra focused approach is required to make an app popular and prominent among users. Your Android app is built and ready to be installed but having a link on your website may not be the only best approach for making it popular. You need to have specialized professionals to generate online buzz through viral marketing, facebook, press releases etc.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/Mobile-App-Development.gif")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/pics/Music-Streaming-App-Development.gif")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Why Choose Mojitolabs for Android App Development</h3>
                                   

                                    <div className="features-text">
                                        <h4>Our Team of Professional Android Developers:</h4>
                                        <p>Our expert developers are always ready to develop the best apps to create a perfect brand image of business on Google Play Store. Our creative and technically sound developers will let you understand the need and relevancy of the trending Android features and after understanding your requirements on a point-to-point basis, they will remain transparent hitherto your project gets accomplished to its best. After the app development, we perform a thorough testing procedure to provide you a bug-free and highly utilitarian app so that you can provide a seamless experience to your users.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4> Android App Development Services</h4>
                                        <ul>
                                        <li>Geolocation App Development</li>
                                        <li>Geofencing Use Cases</li>
                                        <li>Real-Time Tracking with GEO Location App Development</li>
                                        <li>Google Maps API integration</li>
                                        <li>Location-Aware Application Development</li>
                                        </ul>
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

export default App;