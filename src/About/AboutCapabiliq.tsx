import  { useEffect, useRef, useState } from 'react';

const AboutCapabiliq = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const features = [
    "Automated data processing & cleaning",
    "Natural language queries for instant insights",
    "Predictive analytics for strategic workforce planning",
    "Real-time visualization & reporting for smarter, faster hiring"
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
    <section ref={ref} className="min-h-[70vh] bg-gray-50 py-6 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <div className={`relative rounded-2xl overflow-hidden shadow-xl transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                alt="Capabiliq Office Building"
                className="w-full h-64 md:h-80 lg:h-96 object-cover transition-all duration-1000 ease-out"
              />
              
              {/* Overlay Logo */}
              <div className={`absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{
                transitionDelay: isVisible ? '0.5s' : '0s'
              }}>
                <div className="flex items-center gap-3 bg-gray-900/80 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
                    <rect x="0" y="0" width="18" height="18" fill="#E91E63" rx="2"/>
                    <rect x="22" y="0" width="18" height="18" fill="#9C27B0" rx="2"/>
                    <rect x="0" y="22" width="18" height="18" fill="#673AB7" rx="2"/>
                    <rect x="22" y="22" width="18" height="18" fill="#3F51B5" rx="2"/>
                  </svg>
                  <span className="text-white text-xl md:text-2xl font-bold tracking-wide">CAPABILIQ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-4 md:space-y-6">
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              About Capabiliq
            </h2>

            <p className={`text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? '0.2s' : '0s'
            }}>
              Capabiliq is a next-gen AI-driven RaaS and workforce solutions firm, 
              delivering precision-matched talent to businesses worldwide. With 
              DataSense AI—our revolutionary in-house analytics platform—we're 
              transforming how data drives hiring:
            </p>

            <ul className="space-y-2 md:space-y-3">
              {features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className={`flex items-start gap-3 text-gray-800 text-sm md:text-base transition-all duration-700 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${0.4 + (idx * 0.1)}s` : '0s'
                  }}
                >
                  <span className="text-purple-600 text-xl mt-[-2px] transition-all duration-300 group-hover:scale-110">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`group bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              transitionDelay: isVisible ? '0.8s' : '0s'
            }}>
              Know More About Us
              <svg 
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCapabiliq;