import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import rpo from '../../assets/rpo.png';
import gcc from '../../assets/gcc.png';
import staffing from '../../assets/staffing.png';
import onepaymodel from '../../assets/onepaymodel.png';
import { useNavigate } from 'react-router-dom';

const SolutionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const navigate = useNavigate();

  const services = [
    {
      number: "01",
      title: "RPO",
      description: "With our RPO model, you hire faster, cut costs, and access top talent worldwide - powered by automation and hands-on consulting support.",
      image: rpo,
      path: "/rpo" // Add the corresponding route path
    },
    {
      number: "02",
      title: "GCC",
      description: "Effortlessly launch, scale, and optimize your GCC with our end-to-end, cost-efficient support — ensuring smooth operations and strong teams in any location.",
      image: gcc,
      path: "/gcc"
    },
    {
      number: "03",
      title: "Staffing",
      description: "We connect you to pre-vetted, skilled professionals through our AI-driven platform - making hiring faster, smarter, and completely hassle-free for your business.",
      image: staffing,
      path: "/staffing"
    },
    {
      number: "04",
      title: "StartUp",
      description: "Build your dream team with CapabiliQ's startup-first hiring model — transparent pricing, zero hidden costs, and unmatched speed.",
      image: onepaymodel,
      path: "/startups" // Add the corresponding route path
    }
  ];

  const handleKnowMoreClick = (path: string) => {
    navigate(path);
  };

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
      
      const windowHeight = window.innerHeight;
      
      const startRotations = [
        { rotateX: 25, rotateY: -35, rotateZ: -10 },
        { rotateX: -20, rotateY: 30, rotateZ: 8 },
        { rotateX: 30, rotateY: -25, rotateZ: -12 },
        { rotateX: -25, rotateY: 28, rotateZ: 10 }
      ];
      
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        const cardRect = card.getBoundingClientRect();
        
        const scrollStart = cardRect.top - windowHeight + 100;
        const scrollEnd = cardRect.top - 200;
        const scrollRange = scrollEnd - scrollStart;
        const scrollPosition = -scrollStart;
        const scrollProgress = Math.max(0, Math.min(1, scrollPosition / scrollRange));
        
        const startRot = startRotations[index];
        
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);
        const progress = easeOutCubic(scrollProgress);
        
        const scale = 0.7 + (0.3 * progress);
        const rotateX = startRot.rotateX * (1 - progress);
        const rotateY = startRot.rotateY * (1 - progress);
        const rotateZ = startRot.rotateZ * (1 - progress);
        const translateY = 50 * (1 - progress);
        const opacity = 0.3 + (0.7 * progress);
        
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
    
    // Only add scroll effects on larger screens
    if (window.innerWidth > 768) {
      window.addEventListener('scroll', smoothScroll, { passive: true });
      handleScroll();
    }
    
    return () => window.removeEventListener('scroll', smoothScroll);
  }, []);

  return (
    <section 
      ref={ref} 
      className="py-2 sm:py-4 lg:py-6 px-2 sm:px-4 lg:px-6 flex items-center justify-center" 
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}
    >
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className={`text-center mb-4 lg:mb-6 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-2xl sm:text-3xl lg:text-2xl xl:text-4xl font-semibold text-black mb-2 lg:mb-3 px-1 sm:px-2">
            Solution We Offer
          </h1>
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg max-w-3xl mx-auto leading-relaxed font-normal px-1 sm:px-2">
            By combining smart AI automation and real industry expertise, we deliver agile staffing solutions built for modern teams.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-2 lg:gap-4 px-1 sm:px-0">
          {services.map((service, index) => (
            <div
              key={index}
              ref={(el) => { cardsRef.current[index] = el; }}
              className={`bg-white rounded-lg sm:rounded-xl shadow-md hover:shadow-lg lg:hover:shadow-xl transition-all duration-300 ease-out lg:hover:scale-105 ${
                isVisible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                transitionDelay: isVisible ? `${0.2 + (index * 0.15)}s` : '0s'
              }}
            >
              <div className="p-2 sm:p-3 lg:p-4 h-full flex flex-col overflow-hidden">
                {/* Number and Title - Original Horizontal Layout */}
                <div className="flex items-center justify-between gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-black flex-shrink-0">
                    {service.number}
                  </span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-black text-right flex-1">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-1 sm:mb-2 text-sm flex-shrink-0 font-normal">
                  {service.description}
                </p>

                {/* Know More Link */}
                <button 
                  onClick={() => handleKnowMoreClick(service.path)}
                  className="flex items-center gap-1 text-[#760060] font-semibold text-sm hover:gap-2 transition-all duration-300 group mb-1 sm:mb-2 flex-shrink-0 w-fit"
                >
                  Know More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                {/* Image Area */}
                <div className="flex-1 flex items-center justify-center min-h-0 mt-0 sm:mt-1">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="object-contain w-full h-full max-h-24 sm:max-h-32 lg:max-h-40"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;