import React, { Component } from 'react';

class addressInfo extends Component {
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
                                    <p> Plotno.436, DLF Phase-4 Near Cyber-City Gurgaon Haryana - 122002 India</p>
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="single-contact-box">
                                <i className="fa fa-map-marker"></i>
                                <div className="content-title">
                                    <h3>Adress</h3>
                                    <p> Hind Paper, Abulaas Lane, Patna Bihar - 800004 India</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default addressInfo;