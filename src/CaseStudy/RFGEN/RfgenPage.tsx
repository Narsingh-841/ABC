import React from 'react';
import Header from '../../Home/Header/header';
import RfgenCaseStudyHero from './RfgenCaseStudy';


import FAQAccordion from '../../Home/FAQAccordion/FAQAccordion';
import CTASection from '../../Home/CTASection/CTASection';
import Footer from '../../Home/Footer/Footer';
import RfgenCaseStudyDetail from './RfegnCaseStudyDetail';
import ExploreMoreSection from './ExploreMoreSection';



 // or correct path to your Welcome component

const RfgenPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
    <RfgenCaseStudyHero />
    <RfgenCaseStudyDetail />
      <ExploreMoreSection />
    <FAQAccordion />
    <CTASection />
   
      <Footer />
    
    </div>
  );
};

export default RfgenPage;