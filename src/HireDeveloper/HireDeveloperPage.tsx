import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';

import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';


import HireDeveloperSection from './HireDeveloperSection';
import DomainFilterGrid from './DomainFilterGrid';
import HireCTASection from './HireDeveloperForm/HireCTASection';


 // or correct path to your Welcome component

const HireDeveloperPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<HireDeveloperSection/>
<DomainFilterGrid/>
    <FAQAccordion />
    <HireCTASection />
      <Footer />
    
    </div>
  );
};

export default HireDeveloperPage;