import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Wordpress from '../components/technologies/wordpress';
import Footer from '../components/Layouts/Footer';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import Wordpressinfo from '../components/information/wordpress';

class wordpress extends Component {
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
                <Wordpress />
                <Wordpressinfo />
                <WorkingProcess />

                <Footer />
            </React.Fragment>
        );
    }
}

export default wordpress;