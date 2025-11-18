import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
    <section ref={ref} className="bg-gray-50 py-8 lg:py-16 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <div 
          className="rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 text-center shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #7C4DFF 0%, #E91E63 100%)'
          }}
        >
          <h2 className={`text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-white mb-4 lg:mb-6 leading-relaxed transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Welcome to the New Era of Hiring.
            <br />
            <span className={`inline-block transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '0.2s' }}>
              Capabiliq Makes It Simple.
            </span>
          </h2>

          <button 
            onClick={handleBookCall}
            className={`bg-white text-gray-900 px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 rounded-full text-xs md:text-sm lg:text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`} 
            style={{ transitionDelay: '0.6s' }}
          >
            Book a Consulting Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;