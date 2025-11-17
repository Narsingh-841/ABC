import React from 'react';
import Header from '../../Home/Header/header';

import FAQAccordion from '../../Home/FAQAccordion/FAQAccordion';
import CTASection from '../../Home/CTASection/CTASection';
import Footer from '../../Home/Footer/Footer';
import HireDeveloperForm from './HireDeveloperForm';
import HiringProcessTimeline from '../../Home/HiringProcessTimeline/HiringProcessTimeline';
import ClientTestimonials from '../../Home/ClientTestimonials/ClientTestimonials';



 // or correct path to your Welcome component

const HireDeveloperFormPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<HireDeveloperForm/>
<HiringProcessTimeline/>
<ClientTestimonials />
    <FAQAccordion />
    <CTASection />
      <Footer />
    
    </div>
  );
};

export default HireDeveloperFormPage;