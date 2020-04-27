import React, { Component } from 'react';
import Navbar from '../components/Layouts/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Php from '../components/technologies/php';
import SolutionsTab from '../components/Common/SolutionsTab';
import Footer from '../components/Layouts/Footer';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import Phpinfo from '../components/information/php';
class php extends Component {
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
                <Php />
                <Phpinfo />
                
                <WorkingProcess />

                <Footer />
            </React.Fragment>
        );
    }
}

export default php;