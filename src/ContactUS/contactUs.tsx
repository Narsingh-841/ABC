import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';
import HiringFormSection from './HiringFormSection/HiringFormSection';
import TrustedCompanies from '../Home/TrustedCompanies/TrustedCompanies';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import ContactCTASection from './ContactCTASection';







 // or correct path to your Welcome component

const contactUs: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
   <HiringFormSection />
    <TrustedCompanies />
    <ClientTestimonials />
    <FAQAccordion />
 <ContactCTASection />
      <Footer />
    
    </div>
  );
};

export default contactUs;