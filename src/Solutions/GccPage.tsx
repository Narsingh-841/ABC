import React from 'react';
import Header from '../Home/Header/header';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';

import Footer from '../Home/Footer/Footer';


import TrustedCompanies from '../Home/TrustedCompanies/TrustedCompanies';
import GccSection from './GCC/GccSection';
import WhyBuildGCC from './GCC/WhyBuildGCC';
import GCCLifecycleServices from './GCC/GCCLifecycleServices';
import FlexibleEngagementModels from './GCC/EngagementModel';
import CapabiliQAdvantage from './GCC/CapabiliQAdvantage';
import GCCContactForm from './GCC/GCCContactForm';
import HireCTASection from '../HireDeveloper/HireDeveloperForm/HireCTASection';

 // or correct path to your Welcome component

const GccPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
     <GccSection />
  <TrustedCompanies />
    <WhyBuildGCC />
      <GCCLifecycleServices />
      <FlexibleEngagementModels />
      <CapabiliQAdvantage />
      <ClientTestimonials />
    <FAQAccordion />
    <HireCTASection />
   < GCCContactForm />
      <Footer />
    
    </div>
  );
};

export default GccPage;