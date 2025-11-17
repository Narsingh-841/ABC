import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';

import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';


import SalesforceSection from './Salesforce/SalesforceSection';
import SalesforceServices from './Salesforce/SalesForceServices';


 // or correct path to your Welcome component

const serviceCyberSecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<SalesforceSection/>
<SalesforceServices/>
    <FAQAccordion />
    <CTASection />
      <Footer />
    
    </div>
  );
};

export default serviceCyberSecurityPage;