import React from 'react';
import Header from '../Home/Header/header';
import ImpactNumbers from '../AboutUS/ImpactNumbers/ImpactNumbers';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';
import Footer from '../Home/Footer/Footer';
import HireDevelopers from './Staffing/HireDevelopers';
import HiringModels from './Staffing/HiringModels';
import HiringProcess from './Staffing/HiringProcess';

 // or correct path to your Welcome component

const StaffingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
     <HireDevelopers />
     <HiringModels />
     <HiringProcess />
      <ImpactNumbers />
      <ClientTestimonials />
    <FAQAccordion />
    <CTASection />
      <Footer />
    
    </div>
  );
};

export default StaffingPage;