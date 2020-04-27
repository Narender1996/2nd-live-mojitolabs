import React, { Component } from 'react';

class WorkingProcess extends Component {
    render() {
        return (
            <section className="work-section pb-70">
                <div className="container">
                    <div className="section-title">
                        <span>Our Working Process</span>
                        <h2>How Does mojitolabs Works</h2>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="work-item">
                                <div className="work-image">
                                    <img src={require("../../images/work/work1.jpg")} alt="image" />
                                </div>
                                <div className="work-content">
                                    <h3>Planning</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="work-item">
                                <div className="work-image">
                                    <img src={require("../../images/work/work2.jpg")} alt="image" />
                                </div>
                                <div className="work-content">
                                    <h3>Design & Execution</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="work-item">
                                <div className="work-image">
                                    <img src={require("../../images/pics/work3.jpg")} alt="image" />
                                </div>
                                <div className="work-content">
                                    <h3>Analytics Project</h3>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkingProcess;