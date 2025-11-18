import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import hiredevelopersbg from '../../assets/hiredevelopers.png';

export default function HireDevelopers() {
  const navigate = useNavigate();

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/capabiliq', '_blank', 'noopener,noreferrer');
  };

  const handleTalkToExpertClick = () => {
    navigate('/contact-us');
  };

  return (
    <section className="relative bg-gradient-to-b  from-blue-50 via-purple-50 to-pink-100 overflow-hidden py-6 md:py-6 lg:py-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-2 md:space-y-2">
            {/* LinkedIn Logo */}
            <button
    onClick={handleLinkedInClick}
    className="flex items-center justify-center"
  >
    <span className="text-[#0077B5] font-bold text-lg lg:text-xl">Linked</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="w-5 h-5 lg:w-6 lg:h-6 ml-1">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  </button>

            {/* Main Heading */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                Hire the Best Developers around the Globe
              </h1>
              <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-relaxed">
                We connect you to pre-vetted, skilled professionals through our AI-driven platform — making hiring faster, smarter, and completely hassle-free for your business.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-1 md:space-y-2">
              {[
                '24x7 Dedicated Account Managers',
                '93% Offer to Join Ratio',
                'Flexible Hiring Models',
                'Easy Talent Replacements',
                '100% Source Code Protection',
                'Strict NDA and adherence to data security practices'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex items-center justify-center h-4 w-4 md:h-5 md:w-5 rounded-full bg-green-400">
                      <Check size={12} className="text-white font-bold md:w-4 md:h-4" />
                    </div>
                  </div>
                  <span className="text-gray-800 text-xs md:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button 
              onClick={handleTalkToExpertClick}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-fit text-xs md:text-sm"
            >
              Talk With Our Expert
            </button>
          </div>

          {/* Right Side - Imported Image */}
          <div className="relative h-56 sm:h-72 md:h-80 lg:h-[350px] xl:h-[380px] flex items-center justify-center mt-2 md:mt-0">
            {/* Background shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Blue gradient circles */}
              <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-blue-400 rounded-full opacity-30 blur-2xl md:blur-3xl -top-8 -left-8 md:-top-16 md:-left-16"></div>
              <div className="absolute w-36 h-36 md:w-48 md:h-48 bg-purple-500 rounded-full opacity-40 blur-2xl md:blur-3xl -bottom-4 right-0 md:-bottom-8"></div>
            </div>

            {/* Imported Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={hiredevelopersbg} 
                alt="Hire Developers" 
                className="w-full h-full object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg scale-90 md:scale-95"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}