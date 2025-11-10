import { useEffect, useRef, useState } from 'react';
import businesscard from '../assets/Bussinesscard.jpg';

const TrustStatsSection = () => {
  const [, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const centerCircleRef = useRef<HTMLDivElement>(null);
  const arrowsRef = useRef<(HTMLDivElement | null)[]>([]);
  const textsRef = useRef<(HTMLDivElement | null)[]>([]);
  const headingRef = useRef<HTMLHeadingElement>(null);

  const stats = [
    { value: "12 Hours", label: "Turnaround Time", position: "top-left" },
    { value: "6x Faster", label: "Hiring Efficiency", position: "top-right" },
    { value: "99%", label: "Match Accuracy", position: "left" },
    { value: "100%", label: "Transparency", position: "right" },
    { value: "93%", label: "Offer-to-Join Ratio", position: "bottom-left" },
    { value: "0%", label: "Hiring Guesswork", position: "bottom-right" },
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
      
      // Calculate scroll progress
      const scrollStart = rect.top - windowHeight + 400;
      const scrollEnd = rect.bottom - windowHeight / 3;
      const scrollRange = scrollEnd - scrollStart;
      const scrollPosition = -scrollStart;
      const scrollProgress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
      
      // Enhanced easing
      const easeOutBack = (t: number) => {
        const c1 = 1.70158;
        const c3 = c1 + 1;
        return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
      };
      
      const progress = easeOutBack(scrollProgress);

      // Center circle animation
      if (centerCircleRef.current) {
        const scale = 0.6 + (0.4 * progress);
        const rotateY = 45 * (1 - progress);
        const opacity = 0.3 + (0.7 * progress);
        
        centerCircleRef.current.style.transform = `
          perspective(1200px) 
          rotateY(${rotateY}deg)
          scale(${scale})
        `;
        centerCircleRef.current.style.opacity = opacity.toString();
      }

      // Arrows animation - fly in from different 3D angles
      arrowsRef.current.forEach((arrow, index) => {
        if (!arrow) return;
        
        const arrowRotations = [
          { rotateX: -30, rotateY: 40, rotateZ: -20 },   // top-left
          { rotateX: -25, rotateY: -35, rotateZ: 15 },   // top-right
          { rotateX: 15, rotateY: 45, rotateZ: -10 },    // left
          { rotateX: 20, rotateY: -40, rotateZ: 8 },     // right
          { rotateX: 35, rotateY: 30, rotateZ: -15 },    // bottom-left
          { rotateX: 30, rotateY: -25, rotateZ: 12 }     // bottom-right
        ];
        
        const startRot = arrowRotations[index];
        const rotateX = startRot.rotateX * (1 - progress);
        const rotateY = startRot.rotateY * (1 - progress);
        const rotateZ = startRot.rotateZ * (1 - progress);
        
        const scale = 0.4 + (0.6 * progress);
        const opacity = 0.2 + (0.8 * progress);
        
        // Add some floating movement
        const float = Math.sin(progress * Math.PI) * 10;
        
        arrow.style.transform = `
          perspective(800px) 
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          rotateZ(${rotateZ}deg)
          scale(${scale})
          translateY(${float}px)
        `;
        arrow.style.opacity = opacity.toString();
      });

      // Text animation - pop in with 3D effect
      textsRef.current.forEach((text, index) => {
        if (!text) return;
        
        const textRotations = [
          { rotateX: 25, rotateY: -20 },   // top-left
          { rotateX: 20, rotateY: 15 },    // top-right
          { rotateX: -15, rotateY: -25 },  // left
          { rotateX: -18, rotateY: 22 },   // right
          { rotateX: 22, rotateY: -18 },   // bottom-left
          { rotateX: 18, rotateY: 20 }     // bottom-right
        ];
        
        const startRot = textRotations[index];
        const rotateX = startRot.rotateX * (1 - progress);
        const rotateY = startRot.rotateY * (1 - progress);
        
        const scale = 0.7 + (0.3 * progress);
        const opacity = 0.1 + (0.9 * progress);
        
        text.style.transform = `
          perspective(600px) 
          rotateX(${rotateX}deg)
          rotateY(${rotateY}deg)
          scale(${scale})
        `;
        text.style.opacity = opacity.toString();
      });

      // Heading animation
      if (headingRef.current) {
        const scale = 0.8 + (0.2 * progress);
        const rotateX = 15 * (1 - progress);
        const opacity = 0.2 + (0.8 * progress);
        
        headingRef.current.style.transform = `
          perspective(1000px) 
          rotateX(${rotateX}deg)
          scale(${scale})
        `;
        headingRef.current.style.opacity = opacity.toString();
      }
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
    handleScroll();
    
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  const getArrowPosition = (position: string) => {
    const base = "absolute w-24 h-24 flex items-center justify-center";
    switch (position) {
      case "top-left":
        return `${base} top-[15%] left-[18%] rotate-[225deg]`;
      case "top-right":
        return `${base} top-[15%] right-[18%] rotate-[-45deg]`;
      case "left":
        return `${base} top-1/2 left-[12%] -translate-y-1/2 rotate-[180deg]`;
      case "right":
        return `${base} top-1/2 right-[10%] -translate-y-1/2 rotate-0`;
      case "bottom-left":
        return `${base} bottom-[15%] left-[18%] rotate-[135deg]`;
      case "bottom-right":
        return `${base} bottom-[15%] right-[18%] rotate-[45deg]`;
      default:
        return base;
    }
  };

  const getTextPosition = (position: string) => {
    const base = "absolute text-center";
    switch (position) {
      case "top-left":
        return `${base} top-[4%] left-[4%]`;
      case "top-right":
        return `${base} top-[4%] right-[4%]`;
      case "left":
        return `${base} top-1/2 left-[-4%] -translate-y-1/2`;
      case "right":
        return `${base} top-1/2 right-[-4%] -translate-y-1/2`;
      case "bottom-left":
        return `${base} bottom-[6%] left-[4%]`;
      case "bottom-right":
        return `${base} bottom-[6%] right-[4%]`;
      default:
        return base;
    }
  };

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-6 px-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        {/* Circle + Arrows */}
        <div
          className="relative w-full max-w-4xl mx-auto mb-16"
          style={{ aspectRatio: "16/9" }}
        >
          {/* Center Image Circle with 3D animation */}
          <div 
            ref={centerCircleRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px]"
            style={{
              transformStyle: 'preserve-3d',
              willChange: 'transform'
            }}
          >
            <div className="absolute inset-0 rounded-full border-8 border-black transition-all duration-700 ease-out"></div>
            <div className="absolute inset-4 rounded-full border-4 border-purple-400 overflow-hidden transition-all duration-1000 ease-out">
              <img
                src={businesscard}
                alt="Capabiliq Business Exchange"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Arrows + Text with 3D animation */}
          {stats.map((stat, i) => (
            <div key={i}>
              {/* Arrow */}
              <div 
                ref={(el) => { arrowsRef.current[i] = el; }}
                className={getArrowPosition(stat.position)}
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full text-black opacity-90"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <div 
                ref={(el) => { textsRef.current[i] = el; }}
                className={getTextPosition(stat.position)}
                style={{
                  transformStyle: 'preserve-3d',
                  willChange: 'transform'
                }}
              >
                <div className="text-4xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-gray-700 text-lg font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Heading with 3D animation */}
        <h2 
          ref={headingRef}
          className="text-5xl md:text-6xl font-bold text-center text-gray-900"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform'
          }}
        >
          Why Businesses Trust{" "}
          <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
            Capabiliq
          </span>
        </h2>
      </div>
    </section>
  );
};

export default TrustStatsSection;