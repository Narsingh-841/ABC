import React from 'react';
import { useNavigate } from 'react-router-dom';
import herosection from "../../assets/hero sections.jpg";
import heroformobile from "../../assets/Hoeroformobile.jpg";

const RPOSolutionsHero: React.FC = () => {
  const navigate = useNavigate();

  const handleBookConsultingClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="relative flex bg-gradient-to-b from-blue-50 via-purple-50 to-pink-100 items-center justify-center px-4 py-16 font-sf">
      {/* Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <img
          src={herosection}
          alt="Background"
          className="hidden lg:block w-full h-full object-cover"
        />
        {/* Mobile Background */}
        <img
          src={heroformobile}
          alt="Mobile Background"
          className="block lg:hidden w-full h-full object-cover"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Content Container */}
      <div className="max-w-5xl mx-auto z-10 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span 
            className="px-6 py-3 rounded-full text-white font-semibold text-sm"
            style={{ backgroundColor: '#760060' }}
          >
            Our Solutions
          </span>
        </div>

        {/* Main Heading - Changed to semibold */}
        <h1 className="text-4xl md:text-6xl font-semibold mb-6 text-gray-900">
          RPO Solutions Provider in India
        </h1>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-4xl mx-auto leading-relaxed">
          Capabiliq's RPO solution is designed for enterprises that require precision and scale. We combine AI-driven tools, expert recruiters, and tailored strategies to deliver exceptional talent trusted by leading organizations.
        </p>

        {/* CTA Button */}
        <button 
          onClick={handleBookConsultingClick}
          className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          style={{
            background: 'linear-gradient(to right, #e85d9a, #a855f7)'
          }}
        >
          Book a Consulting Call
        </button>
      </div>
    </div>
  );
};

export default RPOSolutionsHero;