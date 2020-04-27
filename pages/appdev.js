import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import App from '../components/technologies/App';
import Footer from '../components/Layouts/Footer';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import Appdev from '../components/information/appdev';
class app extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Project Details" 
                    breadcrumbTextOne="Home" 
                    breadcrumbTextTwo="Project Details" 
                    breadcrumbUrl="/" 
                />
                <App />
                <Appdev/>
                <WorkingProcess />

                <Footer />
            </React.Fragment>
        );
    }
}

export default app;