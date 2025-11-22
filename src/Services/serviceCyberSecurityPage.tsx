import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';

import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CyberSecuritySection from './CyberSecuritySection/CyberSecuritySection';
import CyberSecurityServices from './CyberSecurityServices/CyberSecurityServices';
import ContactCTASection from '../ContactUS/ContactCTASection';


 // or correct path to your Welcome component

const serviceCyberSecurityPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<CyberSecuritySection/>
<CyberSecurityServices/>
    <FAQAccordion />
    <ContactCTASection />
      <Footer />
    
    </div>
  );
};

export default serviceCyberSecurityPage;