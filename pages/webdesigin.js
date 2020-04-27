import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Webdesigin from '../components/technologies/webdesigin';
import Footer from '../components/Layouts/Footer';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import Webdesigininfo from '../components/information/webdesgin';

class webdesigin extends Component {
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
                <Webdesigin />
                <Webdesigininfo />
                <WorkingProcess />

                <Footer />
            </React.Fragment>
        );
    }
}

export default webdesigin;