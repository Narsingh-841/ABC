import { useEffect, useRef, useState } from 'react';

const GrowthPartnerSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const services = [
    {
      number: "01",
      title: "AI + Human-Led Talent Intelligence",
      description: "Capabilio doesn't just source talent - it predicts success. We combine behavioral data, role alignment, and real-time market insights to deliver candidates who are both skilled and culturally aligned within 24-48 hours."
    },
    {
      number: "02",
      title: "Strategic Talent Consulting",
      description: "We don't consult for compliance - we consult for capacity. From workforce planning and DEI optimization to capability mapping and TA strategy, we align your people strategy with business outcomes."
    },
    {
      number: "03",
      title: "Embedded TA Pods",
      description: "Our embedded recruitment pods act as your internal TA team on demand — powered by data, empathy, and speed. From demand forecasting to candidate engagement, we run your hiring operations seamlessly while you scale."
    },
    {
      number: "04",
      title: "Global Capability Centers (GCC 2.0)",
      description: "We help companies launch or expand their GCCs with agility and intelligence. Our AI tools benchmark roles, costs, and local availability, enabling you to scale your offshore or nearshore teams with clarity.",
      span: 1
    },
    {
      number: "05",
      title: "Startup ScaleOps",
      description: "Capabilio partners with early-stage founders to build high-performing teams from zero to one. From hiring your first 10 engineers to setting up your entire TA framework, we grow as you grow.",
      span: 1
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

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress
      const scrollStart = rect.top - windowHeight + 300;
      const scrollEnd = rect.bottom - windowHeight / 2;
      const scrollRange = scrollEnd - scrollStart;
      const scrollPosition = -scrollStart;
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
      
      // Different animations for top row (1-3) and bottom row (4-5)
      const startRotations = [
        { rotateZ: -12, skewY: -3 },   // Card 1: tilt left
        { rotateZ: 10, skewY: 2 },     // Card 2: tilt right
        { rotateZ: -8, skewY: -2 },    // Card 3: tilt left
        { rotateZ: 0, skewY: 0 },      // Card 4: from center (no tilt)
        { rotateZ: 0, skewY: 0 }       // Card 5: from center (no tilt)
      ];
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const startRot = startRotations[index];
        
        // Smooth easing
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const progress = easeOutCubic(scrollProgress);
        
        // Cards 4 and 5 (bottom row) expand from center
        if (index >= 3) {
          // Bottom cards: expand outward from center (overlapped to separated)
          const scale = 0.75 + (0.25 * progress);
          const opacity = 0.2 + (0.8 * progress);
          const translateY = 40 * (1 - progress);
          
          // Card 4 (index 3) moves from center to left, Card 5 (index 4) moves from center to right
          const isLeftCard = index === 3;
          const translateX = isLeftCard 
            ? -150 * (1 - progress)  // Start at center (right), move left
            : 150 * (1 - progress);   // Start at center (left), move right
          
          card.style.transform = `
            scale(${scale})
            translateY(${translateY}px)
            translateX(${translateX}px)
          `;
          card.style.opacity = opacity.toString();
          card.style.transition = 'none';
        } else {
          // Top row cards: tilt and straighten
          const rotateZ = startRot.rotateZ * (1 - progress);
          const skewY = startRot.skewY * (1 - progress);
          const scale = 0.85 + (0.15 * progress);
          const opacity = 0.3 + (0.7 * progress);
          const translateY = 30 * (1 - progress);
          
          card.style.transform = `
            rotateZ(${rotateZ}deg)
            skewY(${skewY}deg)
            scale(${scale})
            translateY(${translateY}px)
          `;
          card.style.opacity = opacity.toString();
          card.style.transition = 'none';
        }
      });
    };

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
    handleScroll();
    
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-6 px-6 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl w-full rounded-3xl p-12 lg:p-16" style={{ backgroundColor: '#0A2540' }}>
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Intelligent Growth Partner for Modern Teams
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Blending AI precision with human expertise to help companies hire faster, smarter, and more meaningfully.
          </p>
        </div>

        {/* Top Row - 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity'
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="text-6xl font-bold text-gray-900">
                  {service.number}
                </div>
                <h3 className="text-xl font-bold text-gray-900 pt-3 flex-1">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 2 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.slice(3, 5).map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index + 3] = el; }}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform, opacity'
              }}
            >
              <div className="mb-6">
                <div className="text-6xl font-bold text-gray-900 mb-4">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className={`text-center transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transitionDelay: isVisible ? '1.05s' : '0s'
        }}>
          <button className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Book a Consulting Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default GrowthPartnerSection;