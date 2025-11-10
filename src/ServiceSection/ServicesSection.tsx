import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      number: "01.",
      title: "Cyber Security",
      description: "Protecting businesses from digital threats through advanced security frameworks, continuous monitoring, and proactive defense strategies."
    },
    {
      number: "02.",
      title: "AI & Data Analytics",
      description: "Transforming raw data into intelligent insights using AI-driven models to optimize decisions and accelerate growth."
    },
    {
      number: "03.",
      title: "Salesforce",
      description: "Empowering customer engagement and automation through customized Salesforce implementations, integrations, and CRM optimization."
    },
    {
      number: "04.",
      title: "Tailor-Made Digital Tech Solutions",
      description: "Building bespoke digital products and systems aligned with your business goals, ensuring efficiency and innovation."
    }
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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress within the section
      const scrollStart = rect.top - windowHeight + 200;
      const scrollEnd = rect.top + 200; // Complete when top is 100px from top
      const scrollRange = scrollEnd - scrollStart;
      const scrollPosition = -scrollStart;
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
      
      // Different rotation angles for each card
      const startRotations = [
        { rotateX: 25, rotateY: -35, rotateZ: -10 },
        { rotateX: -20, rotateY: 30, rotateZ: 8 },
        { rotateX: 30, rotateY: -25, rotateZ: -12 },
        { rotateX: -25, rotateY: 28, rotateZ: 10 }
      ];
      
      // Apply effects to cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const startRot = startRotations[index];
        
        // Easing function for smooth animation
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const progress = easeOutCubic(scrollProgress);
        
        // Scale from small to normal
        const scale = 0.7 + (0.3 * progress);
        
        // Rotate from angled to flat
        const rotateX = startRot.rotateX * (1 - progress);
        const rotateY = startRot.rotateY * (1 - progress);
        const rotateZ = startRot.rotateZ * (1 - progress);
        
        // Move up from below
        const translateY = 50 * (1 - progress);
        
        // Fade in
        const opacity = 0.3 + (0.7 * progress);
        
        // Apply transformations
        card.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
          scale(${scale})
          translateY(${translateY}px)
        `;
        card.style.opacity = opacity.toString();
        card.style.transition = 'none';
      });
    };

    // Smooth scroll handling
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', smoothScroll, { passive: true });
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-6 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full rounded-3xl p-12 lg:p-16" style={{ backgroundColor: '#7B1E7A' }}>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Header */}
          <div className={`text-white lg:col-span-2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              Services<br />We Provide
            </h2>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed max-w-md">
              We blend AI automation with industry expertise to offer agile staffing solutions tailored for today's hiring teams.
            </p>
            <button className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: isVisible ? '0.6s' : '0s'
            }}>
              View Our Services
            </button>
          </div>

          {/* Right Side - Service Cards Grid with 3D Scroll Animation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-3">
            {services.map((service, index) => (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                  transitionDelay: isVisible ? `${0.4 + (index * 0.15)}s` : '0s'
                }}
              >
                <div className="text-6xl font-bold text-[#760060] mb-4">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold text-[#760060] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#760060] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;