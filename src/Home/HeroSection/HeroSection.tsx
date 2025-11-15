import { useState, useEffect, useRef } from 'react';
import Abstractspace from '../../assets/abstract-space.png';
import ring from '../../assets/ring-decorative.png';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const taglines = [
    "One Payment. Unlimited Hires.",
    "Smart Hiring for Startups", 
    "100% cost-effective for startups"
  ];

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

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const sectionTop = section.getBoundingClientRect().top;
      const sectionHeight = section.offsetHeight;
      
      let progress = 0;
      if (sectionTop < 0) {
        progress = Math.min(Math.abs(sectionTop) / (sectionHeight * 0.7), 1);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate taglines every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [taglines.length]);

  const get3DTransform = (progress: number) => {
    const rotateX = progress * 45;
    const translateZ = progress * -200;
    const scale = 1 - (progress * 0.3);
    const opacity = 1 - (progress * 1.2);
    
    return {
      transform: `perspective(1000px) rotateX(${rotateX}deg) translateZ(${translateZ}px) scale(${scale})`,
      opacity: Math.max(0, opacity)
    };
  };

  const contentStyle = get3DTransform(scrollProgress);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-white via-purple-100 to-white overflow-hidden pt-32">
      {/* Add SF Pro font family to the global styles or import it */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;600;700;800&display=swap');
          .sf-pro {
            font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
          }
        `}
      </style>

      {/* Left Decorative Image - Positioned like in screenshot */}
      <div className="absolute -left-12 top-6/8 -translate-y-1/2 w-62 h-62 opacity-80 z-0">
        <img 
          src={Abstractspace}
          alt="Abstract space design" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Right Decorative Image - Positioned like in screenshot */}
      <div className="absolute -right-10 top-1/9 w-52 h-52 opacity-90 z-0">
        <img 
          src={ring}
          alt="Ring decorative element" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Main Content */}
      <div 
        ref={contentRef}
        className="max-w-6xl mx-auto px-6 text-center relative z-10 transition-transform duration-100 ease-out sf-pro"
        style={contentStyle}
      >
        {/* LinkedIn Badge */}
        <div className={`flex items-center justify-center gap-2 mb-6 transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-[-50px] scale-90'
        }`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="w-6 h-6">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span className="text-blue-600 font-bold text-lg">LinkedIn</span>
        </div>

        {/* Tagline Box */}
        <div className={`inline-block mb-12 px-8 py-3 rounded-full border-2 border-gray-400 bg-white/60 backdrop-blur-sm transition-all duration-1000 delay-200 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-[-30px] scale-95'
        }`}>
          <p className="text-gray-900 font-bold text-2xl transition-opacity duration-500">
            {taglines[currentTagline]}
          </p>
        </div>

        {/* Main Heading - All content centered */}
        <h1 className={`text-6xl md:text-7xl lg:text-7xl font-semibold mb-10 md:-ml-14 leading-tight transition-all duration-1000 delay-300 text-center ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-10 scale-95'
        }`}>
          <div className="block">
            <span className="text-gray-900">Empowering </span>
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Startups</span>
            <span className="text-gray-900">, Global </span>
            <span className="bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Teams</span>
          </div>
          <div className="mt-2">
            <span className="text-gray-900">and </span>
            <span className="bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">GCC</span>
            <span className="text-gray-900">'s</span>
          </div>
        </h1>

        {/* Review Badges */}
        <div className={`flex items-center justify-center gap-4 flex-wrap mb-12 transition-all duration-1000 delay-400 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md border-2 border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-bold text-gray-900 text-sm">Google</span>
            <span className="font-bold text-gray-900 text-sm">4.9</span>
            <span className="text-yellow-400">★</span>
          </div>
          
          <div className="flex items-center gap-2 bg-white px-5 py-2 rounded-full shadow-md border-2 border-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00B67A">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <span className="font-bold text-gray-900 text-sm">Trustpilot</span>
            <span className="font-bold text-gray-900 text-sm">4.9</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className={`transition-all duration-1000 delay-500 ${
          isVisible 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-3 rounded-full text-base font-bold hover:shadow-2xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-300 shadow-lg">
            Book a Consulting Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;