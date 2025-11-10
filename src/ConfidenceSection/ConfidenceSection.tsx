import { useEffect, useRef, useState } from 'react';
import { Brain, Clock, Users, Target, Repeat, TrendingUp } from 'lucide-react';

const ConfidenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const features = [
    {
      icon: Brain,
      number: "01",
      title: "AI-backed + Human-verified Hiring",
      description: "Smart AI precision meets expert human judgment to deliver reliable, high-quality talent every single time."
    },
    {
      icon: Clock,
      number: "02",
      title: "24-Hour Shortlist Turnaround",
      description: "Receive handpicked, job-ready candidates within 24 hours—fast, efficient, and tailored to your requirements."
    },
    {
      icon: Users,
      number: "03",
      title: "Deep Domain Recruiters",
      description: "Specialized recruiters with real industry expertise ensure precise talent matches across tech, product, sales, and operations."
    },
    {
      icon: Target,
      number: "04",
      title: "Capability-Based Assessments",
      description: "We evaluate real skills and problem-solving abilities - not keywords - to find truly capable, high-performing candidates."
    },
    {
      icon: Repeat,
      number: "05",
      title: "Flexible Engagement Models",
      description: "Choose engagement models that fit your goals—full-time, contract, or fully embedded recruitment pods."
    },
    {
      icon: TrendingUp,
      number: "06",
      title: "Data-Driven Talent Insights",
      description: "Leverage analytics to identify hiring trends, optimize decisions, and build stronger, future-ready teams."
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
      
      // ULTRA ENHANCED: Start animation much earlier and extend range
      const scrollStart = rect.top - windowHeight + 400; // Start much earlier
      const scrollEnd = rect.top + 400; // Complete when top is 100px from top
      const scrollRange = scrollEnd - scrollStart;
      const scrollPosition = -scrollStart;
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
      
      // ULTRA DRAMATIC: Extreme rotation angles for maximum impact
      const startRotations = [
        { rotateX: 55, rotateY: -65, rotateZ: -28 },   // Card 1: extreme left tilt
        { rotateX: -50, rotateY: 60, rotateZ: 30 },    // Card 2: extreme right tilt
        { rotateX: 58, rotateY: -62, rotateZ: 32 },    // Card 3: extreme left tilt
        { rotateX: -52, rotateY: 65, rotateZ: -30 },   // Card 4: extreme right tilt
        { rotateX: 60, rotateY: -68, rotateZ: 26 },    // Card 5: extreme left tilt
        { rotateX: -55, rotateY: 62, rotateZ: -34 }    // Card 6: extreme right tilt
      ];
      
      // Apply effects to cards
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const startRot = startRotations[index];
        
        // ULTRA ENHANCED: More aggressive easing for explosive effect
        const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
        const progress = easeOutExpo(scrollProgress);
        
        // EXTREME transformations
        const rotateX = startRot.rotateX * (1 - progress);
        const rotateY = startRot.rotateY * (1 - progress);
        const rotateZ = startRot.rotateZ * (1 - progress);
        
        // ULTRA ENHANCED: Dramatic scale change from tiny to full
        const scale = 0.55 + (0.45 * progress);
        
        // ULTRA ENHANCED: Start nearly invisible
        const opacity = 0.05 + (0.95 * progress);
        
        // ULTRA ENHANCED: Massive vertical movement
        const translateY = 80 * (1 - progress);
        
        // BONUS: Add blur effect for depth
        const blur = 8 * (1 - progress);
        
        // BONUS: Add horizontal spread for more dynamic entrance
        const translateX = (index % 2 === 0 ? -30 : 30) * (1 - progress);
        
        // Apply ultra-enhanced transform with extreme perspective
        card.style.transform = `
          perspective(800px) 
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
          scale(${scale})
          translateY(${translateY}px)
          translateX(${translateX}px)
        `;
        card.style.opacity = opacity.toString();
        card.style.filter = `blur(${blur}px)`;
        card.style.transition = 'none';
      });
    };

    // Use requestAnimationFrame for smooth scroll updates
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
    <section ref={ref} className="min-h-screen bg-gray-50 py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className={`text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Hire with Confidence, Not Guesswork.
        </h2>

        {/* Features Grid with Rotating 3D Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                ref={(el) => { cardsRef.current[index] = el; }}
                className={`transition-opacity duration-700 ease-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.2 + (index * 0.1)}s` : '0s',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                <div 
                  className="bg-white rounded-3xl p-8 shadow-2xl h-full relative"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50/60 via-transparent to-pink-50/40 rounded-3xl pointer-events-none" />
                  
                  {/* Decorative corner accent */}
                  <div 
                    className="absolute top-0 right-0 w-24 h-24 rounded-3xl opacity-20"
                    style={{ 
                      background: 'linear-gradient(135deg, #7B1E7A 0%, transparent 70%)',
                    }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon Badge */}
                    <div 
                      className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 hover:scale-110 hover:rotate-12 shadow-lg" 
                      style={{ backgroundColor: '#7B1E7A' }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                    </div>

                    {/* Number Badge */}
                   

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[4rem] leading-tight">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed text-base">
                      {feature.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-3xl opacity-60"
                    style={{ backgroundColor: '#7B1E7A' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll indicator */}
        
      </div>
    </section>
  );
};

export default ConfidenceSection;