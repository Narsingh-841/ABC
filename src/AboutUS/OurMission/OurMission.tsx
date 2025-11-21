import { useEffect, useRef, useState } from 'react';
import aboutUs from '../../assets/about us.jpg';

export default function AboutCapabiliq() {
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
    <section ref={ref} className="min-h-[60vh] bg-white py-2 px-4 sm:py-2 sm:px-4 lg:py-2 lg:px-4 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 xl:gap-12 items-center">
          
          {/* Left: Simple Image */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className={`transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="rounded-2xl lg:rounded-3xl overflow-hidden">
                <img
                  src={aboutUs}
                  alt="Capabiliq Office"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-4 lg:space-y-6 text-center lg:text-left">
            <div className="space-y-3 lg:space-y-4">
              <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-semibold text-gray-900 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ fontFamily: '"SF Pro Display", -apple-system, BlinkMacSystemFont, sans-serif' }}>
                <span className="gradient-text">Our Mission</span>{' '}
                <span className="block mt-1 lg:mt-2">
                  to Simplify Hiring
                </span>
              </h2>
            </div>

            <div className="space-y-3 lg:space-y-4">
              <p className={`text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? '0.2s' : '0s'
              }}>
                To be the most trusted partner in building future-ready IT teams empowered by intelligent technology and real-time insights.
              </p>

              <p className={`text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed sm:leading-loose transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: isVisible ? '0.4s' : '0s'
              }}>
                To connect businesses with high potential talent through agile, quality driven RaaS solutions powered by AI, predictive analytics, and an intuitive, insight-first platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}