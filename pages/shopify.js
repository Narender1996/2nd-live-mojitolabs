import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Shopify from '../components/technologies/shopify';
import Shopifyinfo from '../components/information/shopify'
import Footer from '../components/Layouts/Footer';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';

class shopify extends Component {
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
                <Shopify />
                <Shopifyinfo />
                <WorkingProcess />

                <Footer />
            </React.Fragment>
        );
    }
}

export default shopify;