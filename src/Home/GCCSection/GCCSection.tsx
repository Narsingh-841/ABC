import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const GCCSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate(); // Add this line

  const handleBookCall = () => {
    navigate('/contact-us');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gary-10 py-6 overflow-hidden " style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-200 rounded-full blur-3xl opacity-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
            Global Capability Centers
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Content */}
          <div className={`flex flex-col justify-between transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div>
              <h3 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", sans-serif' }}>
                A Strategic <br />
                Imperative for <br />
                Talent, Speed and <br />
                Cost Optimization
              </h3>

              <p className="text-gray-700 text-base mb-6 leading-relaxed">
                Leading businesses are using GCCs to build core and critical capabilities that are not outsourceable
              </p>
            </div>

            <div>
            <button 
          onClick={handleBookCall}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
        >
          Book a Consulting Call
        </button>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className={`flex items-center transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Top Left - Tags Cell */}
              <div className="relative flex flex-col items-start justify-center gap-6 min-h-[140px] pl-4">
                <div className="border-2 border-pink-900 rounded-lg px-8 py-2.5 bg-white shadow-md transform -rotate-12 animate-float-tag-1">
                  <p className="text-gray-900 font-semibold text-sm whitespace-nowrap">Access Niche Skill Sets</p>
                </div>
                <div className="border-2 border-pink-900 rounded-lg px-8 py-2.5 bg-white shadow-md rotate-6 animate-float-tag-2 ml-12 mt-4" >
                  <p className="text-gray-900 font-semibold text-sm whitespace-nowrap">Hire Top 2% Talent</p>
                </div>
              </div>

              {/* Top Right - 30% Timeline */}
              <div className="bg-white/90 backdrop-blur border-2 border-gray-300 rounded-3xl px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in min-h-[140px] flex flex-col justify-center">
                <p className="text-6xl font-black text-gray-900 mb-2">30%</p>
                <p className="text-gray-700 font-medium text-base">Timeline is reduced</p>
              </div>

              {/* Bottom Left - 30% Productivity */}
              <div className="bg-white/90 backdrop-blur border-2 border-gray-300 rounded-3xl px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in min-h-[140px] flex flex-col justify-center">
                <p className="text-6xl font-black text-gray-900 mb-2">30%</p>
                <p className="text-gray-700 font-medium text-base">Higher Productivity</p>
              </div>

              {/* Bottom Right - 40% Cost */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in min-h-[140px] flex flex-col justify-center" style={{ animationDelay: '0.2s' }}>
                <p className="text-6xl font-black text-white mb-2">40%</p>
                <p className="text-white/90 font-medium text-base">Lower Cost of operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        
        @keyframes float-tag-1 {
          0%, 100% {
            transform: translateY(0px) rotate(-12deg);
          }
          50% {
            transform: translateY(-15px) rotate(-15deg);
          }
        }
        
        @keyframes float-tag-2 {
          0%, 100% {
            transform: translateY(0px) rotate(6deg);
          }
          50% {
            transform: translateY(-18px) rotate(9deg);
          }
        }
        
        .animate-float-tag-1 {
          animation: float-tag-1 3s ease-in-out infinite;
        }
        
        .animate-float-tag-2 {
          animation: float-tag-2 3.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
};

export default GCCSection;