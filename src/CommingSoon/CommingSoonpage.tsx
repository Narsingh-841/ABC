import React from 'react';
import Header from '../Home/Header/header';
import Footer from '../Home/Footer/Footer';
import ComingSoon from './CommingSoon';




 // or correct path to your Welcome component

const CommingSoonpage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
   <ComingSoon/>
      <Footer />
    
    </div>
  );
};

export default CommingSoonpage;