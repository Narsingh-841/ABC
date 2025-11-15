import { useEffect, useRef, useState } from 'react';

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
    <section ref={ref} className="min-h-[70vh] bg-white py-8 px-4 sm:py-12 sm:px-6 lg:py-16 lg:px-8 flex items-center justify-center">
   

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Left: Image with 3D Animation */}
          <div className="order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className={`card-3d relative transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}>
              <div className="card-3d-inner shine-effect">
                <div className="animate-float3D rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
                  style={{
                    width: 'clamp(280px, 80vw, 507px)',
                    height: 'clamp(230px, 65vw, 417px)',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1)'
                  }}>
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
                    alt="Capabiliq Office"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                  
                  {/* 3D Depth Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 mix-blend-overlay pointer-events-none"></div>
                  
                  {/* Floating elements for extra 3D effect */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full opacity-20 animate-float3D"
                    style={{ animationDelay: '1s' }}></div>
                  <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-pink-500 rounded-full opacity-20 animate-float3D"
                    style={{ animationDelay: '2s' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4 lg:space-y-6">
              <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 transition-all duration-1000 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                <span className="gradient-text">Our Mission</span>{' '}
                <span className="block mt-2 lg:mt-4">
                  to Simplify Hiring
                </span>
              </h2>
            </div>

            <div className="space-y-4 lg:space-y-6">
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