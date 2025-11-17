import { ArrowRight, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import GCC from '../../assets/gccpage.png';

export default function GccSection() {
  const navigate = useNavigate();
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/capabiliq', '_blank', 'noopener,noreferrer');
  };
  

  const handleContactClick = () => {
    navigate('/contact-us');
  };

  const handleDownloadPlaybook = () => {
    // You can add download logic here or navigate to playbook page
    navigate('/gcc-playbook');
    // Alternatively for direct download:
    // window.open('/path-to-playbook.pdf', '_blank');
  };

  return (
    <section className="relative mt-18 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-100 overflow-hidden py-6 md:py-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Top Logo */}
        <div className="mb-2 md:mb-2">
        <button 
              onClick={handleLinkedInClick}
              className="flex items-center gap-2 cursor-pointer hover:scale-105 transition-transform duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="w-6 h-6">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-blue-600 font-bold text-lg md:text-xl">LinkedIn</span>
            </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <div className="border-2 border-gray-300 rounded-full px-5 py-2 text-gray-800 font-semibold text-sm">
                CapabiliQ Global Capability Center
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
              Build Your Innovation Engine for Global Growth
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              At CapabiliQ, we help global enterprises set up, scale, and optimize Global Capability Centers (GCCs) in India and beyond.
            </p>

            {/* Feature with checkmark */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-400">
                  <Check size={14} className="text-white font-bold" />
                </div>
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                Our end-to-end GCC solutions combine strategy, talent, technology, and compliance — empowering organizations to accelerate global innovation and efficiency.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button 
                onClick={handleContactClick}
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
              >
                Talk to Our GCC Experts
                <ArrowRight size={18} />
              </button>
              <button 
                onClick={handleDownloadPlaybook}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-sm"
              >
                Download GCC Playbook
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side - GCC Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src={GCC} 
              alt="How it works illustration" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}