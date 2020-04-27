import React, { Component } from 'react';

class ContactInfo extends Component {
    render() {
        return (
            <div className="contact-box pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box">
                                <i className="fa fa-map-marker"></i>
                                <div className="content-title">
                                    <h3>Address</h3>
                                    <p> N-3/28A, DLF Phase-2 Near Cyber-City Gurgaon Haryana - 122002 India</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6">
                            <div className="single-contact-box">
                                <i className="fa fa-envelope"></i>
                                <div className="content-title">
                                    <h3>Email</h3>
                                    <p>contact@mojitolabs.com</p>
                                
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-contact-box">
                                <i className="fa fa-phone"></i>
                                <div className="content-title">
                                    <h3>Phone</h3>
                                    <p>+91 7827537259</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactInfo;