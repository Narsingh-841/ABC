import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';

import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';

import AIDataAnalyticsSection from './DataAnalytics/AIDataAnalyticsSection';
import AIDataAnalyticsServices from './DataAnalytics/AIDataAnalyticsServices';
import HireCTASection from '../HireDeveloper/HireDeveloperForm/HireCTASection';


 // or correct path to your Welcome component

const DataAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<AIDataAnalyticsSection/>
<AIDataAnalyticsServices/>
    <FAQAccordion />
    <HireCTASection />
      <Footer />
    
    </div>
  );
};

export default DataAnalytics;