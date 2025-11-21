import React from 'react';
import { useNavigate } from 'react-router-dom';
import herosection from "../../assets/hero sections.jpg";
import heroformobile from "../../assets/Hoeroformobile.jpg";
import datanativImage from "../../assets/casestudydata.jpg";

const DatanitivCaseStudyHero: React.FC = () => {
  const navigate = useNavigate();

  const handleBookConsultingClick = () => {
    navigate('/contact-us');
  };

  return (
    <div className="relative flex items-center justify-center px-4 py-16 font-sf min-h-[80vh]">
      {/* Background Images */}
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
      <div className="max-w-6xl mx-auto z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block mb-6">
              <span 
                className="px-6 py-3 rounded-full text-white font-semibold text-sm"
                style={{ backgroundColor: '#760060' }}
              >
                Case Study
              </span>
            </div>

            {/* Title */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 text-gray-900 leading-tight"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
            >
              datanitiv
            </h1>

            {/* Subtitle */}
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-gray-700 leading-tight"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
            >
              Establishing GCC with Brightcone.AI
            </h2>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
            >
              Discover how DataNitiv partnered with Brightcone.AI to establish a Global Capability Center, driving innovation and scaling technology capabilities through strategic talent acquisition.
            </p>

            {/* CTA Button */}
            <button 
              onClick={handleBookConsultingClick}
              className="px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #e85d9a, #a855f7)',
                fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif'
              }}
            >
              Book a Consulting Call
            </button>
          </div>

          {/* Right Column - DataNitiv Image */}
          <div className="flex items-center justify-center">
            <div className="relative">
              <img 
                src={datanativImage} 
                alt="DataNitiv Case Study"
                className="w-full max-w-md lg:max-w-lg xl:max-w-xl object-contain rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add SF Pro font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default DatanitivCaseStudyHero;