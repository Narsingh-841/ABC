import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Ctabanner from '../../assets/Ctabanner.png';

const CTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '-50px 0px'
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const handleBookCall = () => {
    navigate('/contact-us');
  };

  return (
    <section ref={ref} className="bg-gray-50 py-8 lg:py-8 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <div className="relative overflow-hidden min-h-[200px] md:min-h-[250px] lg:min-h-[300px] rounded-2xl md:rounded-3xl flex items-center justify-center">
          {/* Image as img tag with object-fit */}
          <img 
            src={Ctabanner}
            alt="CTA Banner"
            className="absolute inset-0 w-full max-w-7xl mx-auto h-full object-cover object-center z-0"
          />
          
          {/* Content */}
          <div className="relative z-10 max-w-4xl mx-auto text-center p-6 md:p-8 lg:p-12">
            <h2 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold text-black mb-4 lg:mb-6 leading-relaxed transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ fontFamily: 'SF Pro Display, sans-serif' }}>
              Welcome to the New Era of Hiring.
              <br />
              <span className={`inline-block transition-all duration-1000 text-black ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '0.2s', fontFamily: 'SF Pro Display, sans-serif' }}>
                Capabiliq Makes It Simple.
              </span>
            </h2>

            <button 
              onClick={handleBookCall}
              className={`bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full text-xs md:text-sm lg:text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform relative z-10 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`} 
              style={{ 
                transitionDelay: '0.6s',
                fontFamily: 'SF Pro Display, sans-serif'
              }}
            >
              Book a Consulting Call
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;