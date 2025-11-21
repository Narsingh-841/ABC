import React from 'react';
import Header from '../../Home/Header/header';



import FAQAccordion from '../../Home/FAQAccordion/FAQAccordion';
import CTASection from '../../Home/CTASection/CTASection';
import Footer from '../../Home/Footer/Footer';


import PwcCaseStudyHero from './PwcCaseStudyHero';
import PwcCaseStudyDetail from './PwcCaseStudyDetail';
import ExploreMoreSection from './ExploreMoreSection';



 // or correct path to your Welcome component

const PwcPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
    <PwcCaseStudyHero />
    <PwcCaseStudyDetail />
    <ExploreMoreSection />
    <FAQAccordion />
    <CTASection />
   
      <Footer />
    
    </div>
  );
};

export default PwcPage;