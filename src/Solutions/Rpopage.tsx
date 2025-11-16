import React from 'react';
import Header from '../Home/Header/header';
import ImpactNumbers from '../AboutUS/ImpactNumbers/ImpactNumbers';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';
import Footer from '../Home/Footer/Footer';


import RPOSolutionsHero from './RPO/RPOSolutionsHero';
import WhatIsRPO from './RPO/WhatIsRPO';
import RPOServicesGrowth from './RPO/RPOServicesGrowth';
import WhyChooseCapabiliq from './RPO/WhyChooseCapabiliq';
import RPOUseCases from './RPO/RPOUseCases';
import CapabiliqAdvantageRpo from './RPO/CapabiliqAdvantageRpo';
import RPOContactForm from './RPO/RPOContactForm';

 // or correct path to your Welcome component

const startUpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
     <RPOSolutionsHero />
 <WhatIsRPO />
    <RPOServicesGrowth />
<WhyChooseCapabiliq />
<RPOUseCases />
<CapabiliqAdvantageRpo />
      <ImpactNumbers />
      <ClientTestimonials />
    <FAQAccordion />
    <CTASection />
    <RPOContactForm />
      <Footer />
    
    </div>
  );
};

export default startUpPage;