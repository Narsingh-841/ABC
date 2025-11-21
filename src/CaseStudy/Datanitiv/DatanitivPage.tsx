import React from 'react';
import Header from '../../Home/Header/header';



import FAQAccordion from '../../Home/FAQAccordion/FAQAccordion';
import CTASection from '../../Home/CTASection/CTASection';
import Footer from '../../Home/Footer/Footer';

import ExploreMoreSection from './ExploreMoreSection';
import DatanitivCaseStudyDetail from './DatanitivCaseStudyDetail';
import DatanitivCaseStudyHero from './DatanitivCaseStudyHero';



 // or correct path to your Welcome component

const DatanitivPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
    <DatanitivCaseStudyHero />
    <DatanitivCaseStudyDetail />
      <ExploreMoreSection />
    <FAQAccordion />
    <CTASection />
   
      <Footer />
    
    </div>
  );
};

export default DatanitivPage;