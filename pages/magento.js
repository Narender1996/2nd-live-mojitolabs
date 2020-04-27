import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Magento from '../components/technologies/magento';
import Footer from '../components/Layouts/Footer';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import Magentoinfo from '../components/information/magento';
class magento extends Component {
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
                <Magento />
                <Magentoinfo />
                <WorkingProcess />

                <Footer />
            </React.Fragment>
        );
    }
}

export default magento;