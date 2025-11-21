import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GCC from '../../assets/gccpage.png';
import herosection from "../../assets/hero sections.jpg";
import heroformobile from "../../assets/Hoeroformobile.jpg";

export default function GccSection() {
  const navigate = useNavigate();
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/capabiliq', '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  const handleDownloadPlaybook = () => {
    navigate('/gcc-playbook');
  };

  return (
    <section className="relative min-h-[70vh] overflow-hidden py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
      {/* Background Image */}
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
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Logo */}
        <div className="mb-4 md:mb-6 flex justify-center lg:justify-start">
          <button
            onClick={handleLinkedInClick}
            className="flex items-center px-3 py-1.5 transition-all duration-300"
          >
            <span className="text-[#0077B5] font-bold text-base lg:text-lg">Linked</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="w-4 h-4 lg:w-5 lg:h-5 ml-1">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 text-black text-center lg:text-left">
            {/* Badge */}
            <div className="inline-block">
              <div className="border-2 border-black/80 rounded-full px-4 py-1.5 text-black font-semibold text-sm bg-white ">
                CapabiliQ Global Capability Center
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Build Your
              <br />
              <span className="bg-gradient-to-b from-[#D24B8A] to-[#6D58D6] bg-clip-text text-transparent">
                Innovation Engine
              </span>
              <br />
              for Global Growth
            </h1>

            {/* Description */}
            <p className="text-black text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
              At CapabiliQ, we help global enterprises set up, scale, and optimize Global Capability Centers (GCCs) in India and beyond.
            </p>

            {/* Feature with checkmark */}
            <div className="flex items-start">
              <div className="flex-shrink-0 mt-1">
                {/* Checkmark can be added here if needed */}
              </div>
              <p className="font-semibold text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Our end-to-end GCC solutions combine strategy, talent, technology, and compliance — empowering organizations to accelerate global innovation and efficiency.
              </p>
            </div>
        

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center lg:justify-start">
              <button 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2.5 px-6 rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-base shadow-lg hover:shadow-xl"
              >
                Talk to Our GCC Experts
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={handleDownloadPlaybook}
                className="bg-blue-900 backdrop-blur-sm text-white font-semibold py-2.5 px-6 rounded transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-base border border-blue-800 hover:border-blue-900"
              >
                Download GCC Playbook
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side - GCC Image */}
          <div className="relative flex items-center justify-center">
            <div className="relative">
              <img 
                src={GCC} 
                alt="Global Capability Center Illustration" 
                className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
              />
              {/* Optional: Add a subtle glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10 rounded-lg blur-xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}