import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';

import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import CTASection from '../Home/CTASection/CTASection';

import AIDataAnalyticsSection from './DataAnalytics/AIDataAnalyticsSection';
import AIDataAnalyticsServices from './DataAnalytics/AIDataAnalyticsServices';


 // or correct path to your Welcome component

const DataAnalytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
<AIDataAnalyticsSection/>
<AIDataAnalyticsServices/>
    <FAQAccordion />
    <CTASection />
      <Footer />
    
    </div>
  );
};

export default DataAnalytics;