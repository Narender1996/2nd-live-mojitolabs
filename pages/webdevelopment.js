import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Webdevelopment from '../components/technologies/webdevelopment';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import Footer from '../components/Layouts/Footer';
import Webdev from '../components/information/webdev';


class web_development extends Component {
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
                <Webdevelopment />
                <Webdev />
                <WorkingProcess />
                <Footer />
            </React.Fragment>
        );
    }
}

export default web_development;