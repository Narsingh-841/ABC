import  { useEffect, useRef, useState } from 'react';

const CTABanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={ref} className="bg-gray-50 py-8 px-4">
      <div className="max-w-7xl w-full mx-auto">
        <div 
          className="rounded-2xl md:rounded-[2rem] p-6 md:p-8 lg:p-10 text-center shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #7C4DFF 0%, #E91E63 100%)'
          }}
        >
          <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Welcome to the New Era of Hiring.<br />
            <span className={`inline-block transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: '0.2s' }}>
              Capabiliq Makes It Simple.
            </span>
          </h2>

          <p className={`text-white/90 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`} style={{ transitionDelay: '0.4s' }}>
            Transform your recruitment process with AI-powered solutions. Get started with a free consultation today.
          </p>

          <button className={`bg-white text-gray-900 px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`} style={{ transitionDelay: '0.6s' }}>
            Book a Consulting Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;