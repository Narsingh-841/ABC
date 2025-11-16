import { useEffect, useRef, useState } from 'react';

export default function Welcome() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: '-50px 0px'
      }
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
    <section 
      ref={sectionRef} 
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F5E6F0 50%, #E8B5D4 100%)',
        minHeight: 'clamp(60vh, 80vh, 100vh)'
      }}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-12 md:py-14 text-center relative z-10">
        {/* Welcome Badge */}
        <div className={`flex items-center justify-center gap-2 mb-4 sm:mb-6 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-[-50px] scale-90'
        }`}>
          <div className="text-white px-4 sm:px-6 py-2 rounded-full font-semibold text-xs sm:text-sm" style={{ backgroundColor: '#760060' }}>
            Welcome to CAPABILIQ
          </div>
        </div>

        {/* Main Heading */}
        <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-gray-900 transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          The Intelligent <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">Hiring Platform</span>
        </h1>

        {/* Subheading */}
        <p className={`text-gray-800 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-normal max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-8'
        }`}>
          At Capabiliq, we believe hiring should be smart and straightforward. Our AI-driven platform streamlines the process, ensuring speed, accuracy, and fairness at every step.
        </p>

        {/* Review Badges */}
        <div className={`flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap transition-all duration-1000 delay-600 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-bold text-gray-900 text-xs sm:text-sm">Google</span>
            <span className="font-semibold text-gray-900 text-xs sm:text-sm">4.9</span>
            <span className="text-yellow-400 text-sm sm:text-base">⭐</span>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md border border-gray-200 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="#00B67A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="font-bold text-gray-900 text-xs sm:text-sm">Trustpilot</span>
            <span className="font-semibold text-gray-900 text-xs sm:text-sm">4.9</span>
            <span className="text-yellow-400 text-sm sm:text-base">⭐</span>
          </div>
        </div>
      </div>
    </section>
  );
}