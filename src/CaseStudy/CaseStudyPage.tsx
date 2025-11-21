import React from 'react';
import Header from '../Home/Header/header';

import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';
import Footer from '../Home/Footer/Footer';
import CaseStudyhero from './CaseStudyhero';
import CaseStudies from './CaseStudy';



 // or correct path to your Welcome component

const CaseStudyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
    <CaseStudyhero />
      <CaseStudies />
      <ClientTestimonials />
    <FAQAccordion />
    <CTASection />
   
      <Footer />
    
    </div>
  );
};

export default CaseStudyPage;