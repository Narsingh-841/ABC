import { Check } from 'lucide-react';
import startup from '../../assets/startup.png';
import { useNavigate } from 'react-router-dom';
import herosection from "../../assets/hero sections.jpg"; // Import the same background 
import heroformobile from "../../assets/Hoeroformobile.jpg";

export default function StartUpHire() {
  const navigate = useNavigate();
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/capabiliq', '_blank', 'noopener,noreferrer');
  };
  const handleBookCall = () => {
    navigate('/hire-developer-form');
  };
  
  return (
    <section className="relative overflow-hidden py-6 md:py-6 lg:py-6">

      {/* Background Image - Cover entire section */}
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
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-6 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            {/* LinkedIn Logo */}
            <div className="mb-4 md:mb-2 flex justify-center lg:justify-start">
              <button
                onClick={handleLinkedInClick}
                className="flex items-center  py-1.5 transition-all duration-300"
              >
                <span className="text-[#0077B5] font-bold text-base lg:text-lg">Linked</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="w-4 h-4 lg:w-5 lg:h-5 ml-1">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </button>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-semibold leading-tight text-black mb-4 md:mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                Build your dream team
                with Capabiliq's startup<br className="hidden sm:block" />
                <span className="bg-gradient-to-b from-[#D24B8A] to-[#6D58D6] bg-clip-text text-transparent">
                  first hiring model
                </span>
              </h1>
              <p className="text-black text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                Transparent pricing, zero hidden costs, and unmatched speed. 
                <br className="hidden sm:block" />
                Because smart startups don't just hire — they hire 
                <br className="hidden sm:block" />
                strategically and cost-effectively.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3 md:space-y-4">
              {[
                'Flat 5% Recruitment',
                'Free BGV for First 5 Hires',
                'Pay Once. Hire Unlimited.'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex items-center justify-center h-5 w-5 md:h-6 md:w-6 rounded-full bg-green-400">
                      <Check size={14} className="text-white font-bold" />
                    </div>
                  </div>
                  <span className="text-black text-base md:text-lg font-medium text-left">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleBookCall}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-6 md:py-2 md:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-base md:text-lg w-full sm:w-auto"
            >
              Start Hiring Now
            </button>
          </div>

          {/* Right Side - Imported Image */}
          <div className="relative h-64 md:h-80 lg:h-[450px] flex items-center justify-center mt-6 md:mt-0">
            {/* Imported Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={startup} 
                alt="Startup Hiring" 
                className="w-full h-full object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}