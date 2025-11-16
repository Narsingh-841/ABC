import React from 'react';
import Header from '../Home/Header/header';
import ImpactNumbers from '../AboutUS/ImpactNumbers/ImpactNumbers';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';
import Footer from '../Home/Footer/Footer';
import StartUpHire from './StartUps/StartUpHire';
import WhyStartupsChoose from './StartUps/WhyStartupsChoose';
import HowItWorks from './StartUps/HowItWorks';

 // or correct path to your Welcome component

const startUpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
     <StartUpHire />
 <WhyStartupsChoose />
    <HowItWorks />
      <ImpactNumbers />
      <ClientTestimonials />
    <FAQAccordion />
    <CTASection />
      <Footer />
    
    </div>
  );
};

export default startUpPage;