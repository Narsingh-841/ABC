import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';

import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';
import DigitalTechSolutionsServices from './DigitalTechSolutions/DigitalTechSolutionsServices';
import DigitalTechSolutionsSection from './DigitalTechSolutions/DigitalTechSolutionsSection';



 // or correct path to your Welcome component

const DigitalTechSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<DigitalTechSolutionsSection />
<DigitalTechSolutionsServices/>
    <FAQAccordion />
    <CTASection />
      <Footer />
    
    </div>
  );
};

export default DigitalTechSolutions;