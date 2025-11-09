import React, { useEffect, useRef, useState } from 'react';

const TrustedCompanies: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const companies = [
    { name: 'Geoforge', color: 'text-blue-600' },
    { name: 'Deloitte', color: 'text-white' },
    { name: 'BAIN & COMPANY', color: 'text-red-600' },
    { name: 'RFgen', color: 'text-white' },
    { name: 'ttec DIGITAL', color: 'text-gray-300' },
    { name: 'Infosys', color: 'text-blue-400' },
    { name: 'ZenSar TECHNOLOGIES', color: 'text-gray-300' },
  ];

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
    <section ref={ref} className="py-6 bg-white w-full">
      <div className="w-full mx-auto px-8">
        {/* Animated Heading */}
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Top Developers Trusted By Leading Companies
        </h2>
        
        {/* Marquee Container */}
        <div className="relative overflow-hidden">
          {/* Marquee Animation */}
          <div className="flex animate-marquee whitespace-nowrap">
            {/* First set of companies */}
            {companies.map((company, index) => (
              <div
                key={`first-${index}`}
                className={`text-2xl font-semibold flex-shrink-0 transition-all duration-500 bg-black ease-out hover:scale-110 hover:-translate-y-1 px-6 py-3 rounded-lg mx-4 ${company.color} ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.3 + (index * 0.1)}s` : '0s'
                }}
              >
                {company.name}
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {companies.map((company, index) => (
              <div
                key={`second-${index}`}
                className={`text-2xl font-semibold flex-shrink-0 transition-all duration-500 bg-black ease-out hover:scale-110 hover:-translate-y-1 px-6 py-3 rounded-lg mx-4 ${company.color} ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.3 + (index * 0.1)}s` : '0s'
                }}
              >
                {company.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompanies;