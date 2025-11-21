import React from 'react';
import { useNavigate } from 'react-router-dom';
import herosection from "../assets/hero sections.jpg";
import heroformobile from "../assets/Hoeroformobile.jpg";

const CaseStudyhero: React.FC = () => {
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
      <div className="max-w-5xl mx-auto mt-18 z-10 text-center">
        {/* Badge */}
        <div className="inline-block mb-6">
          <span 
            className="px-6 py-3 rounded-full text-white font-semibold text-sm"
            style={{ backgroundColor: '#760060' }}
          >
            Case Studies
          </span>
        </div>

        {/* Main Heading with reduced spacing */}
        <h1 
          className="text-4xl md:text-6xl font-semibold mb-6 text-gray-900 leading-tight"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
        >
          Experience the Impact, <br />
          <span className="block">Real Cases, Real Results</span>
        </h1>

        {/* Description */}
        <div className="mb-10">
          <p 
            className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
          >
            Discover how we've helped businesses achieve remarkable success through our proven strategies and solutions.
          </p>
        </div>

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

      {/* Add SF Pro font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
};

export default CaseStudyhero;