import { useState, useEffect, useRef, useCallback } from 'react';

const CaseStudyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);

  const caseStudies = [
    {
      id: 1,
      title: "Case Study 1 RFgen: Building from Ground Zero",
      logo: "RFgen",
      logoColor: "bg-gradient-to-r from-gray-200 to-green-400",
      challenge: "A U.S.-based enterprise software company needed to establish an India GCC but lacked market insights, local presence, and talent strategy.",
      approach: [
        "Conducted end-to-end market research and feasibility study.",
        "Designed organizational structure and hiring roadmap.",
        "Executed rapid hiring sprint to fill critical engineering roles."
      ],
      outcome: [
        "Closed 50+ niche technical positions in 3 weeks.",
        "Set up a fully functional GCC with workspace and leadership.",
        "Achieved 40% cost efficiency compared to traditional outsourcing."
      ],
      result: "From zero presence to a high performing GCC — built and scaled in record time."
    },
    {
      id: 2,
      title: "Case Study 2: Scaling Engineering Excellence",
      logo: "TechCo",
      logoColor: "bg-gradient-to-r from-blue-500 to-purple-600",
      challenge: "A fast-growing SaaS company needed to scale their engineering team by 300% within 6 months while maintaining quality standards.",
      approach: [
        "Implemented AI-powered candidate screening process.",
        "Created custom technical assessment frameworks.",
        "Built dedicated recruitment pods for different tech stacks."
      ],
      outcome: [
        "Hired 150+ engineers across 5 locations.",
        "Reduced time-to-hire from 45 days to 18 days.",
        "Achieved 95% candidate satisfaction rate."
      ],
      result: "Transformed from a small team to a robust engineering powerhouse in under 6 months."
    },
    {
      id: 3,
      title: "Case Study 3: Executive Leadership Placement",
      logo: "FinTech",
      logoColor: "bg-gradient-to-r from-yellow-400 to-orange-500",
      challenge: "A fintech unicorn needed C-level executives with specific domain expertise and cultural fit for their expansion phase.",
      approach: [
        "Conducted comprehensive leadership assessment and culture mapping.",
        "Leveraged exclusive network of senior executives.",
        "Facilitated multiple stakeholder interviews and alignment sessions."
      ],
      outcome: [
        "Successfully placed CTO, CFO, and VP of Product.",
        "All executives onboarded within 90 days.",
        "100% retention rate after 18 months."
      ],
      result: "Built a world-class leadership team that drove the company to successful IPO."
    }
  ];

  // Scroll-based 3D animation
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Simple calculation: 0 when bottom at viewport top, 1 when top at viewport bottom
      const progress = Math.max(0, Math.min(1, 
        (windowHeight - rect.top) / (windowHeight * 1.5) // Ends when 70% of viewport is scrolled
      ));
      
      setScrollProgress(progress);
      
      // Smooth easing function
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 4);
      const easedProgress = easeOutCubic(progress);
      
      setScrollProgress(easedProgress);
      
      // Apply 3D transformations to main container
      
    };

    // Throttle scroll events
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        animationRef.current = requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', smoothScroll, { passive: true });
    // Initial call to set initial state
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', smoothScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, [isAnimating]);

  // Calculate individual element animations based on scroll progress
  const getElementStyle = (baseDelay: number = 0) => {

    const elementProgress = Math.max(0, Math.min(1, (scrollProgress - baseDelay) / (1 - baseDelay)));
    
    const translateY = 30 * (1 - elementProgress);
    const opacity = elementProgress;
    const scale = 0.9 + (0.1 * elementProgress);
    
    return {
      transform: `translateY(${translateY}px) scale(${scale})`,
      opacity: opacity,
      transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    };
  };

  const navigateToSlide = useCallback((newIndex: number) => {
    if (isAnimating || newIndex === currentIndex || !contentRef.current) return;
    
    setIsAnimating(true);
    
    // Determine animation direction
    const direction = newIndex > currentIndex ? 1 : -1;
    
    // First half of flip - hide current content
    contentRef.current.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    contentRef.current.style.transform = `perspective(1200px) rotateY(${180 * direction}deg) scale(0.92)`;
    contentRef.current.style.opacity = '0';
    
    setTimeout(() => {
      setCurrentIndex(newIndex);
      
      // Prepare for second half of flip
      contentRef.current!.style.transform = `perspective(1200px) rotateY(${-90 * direction}deg) scale(0.92)`;
      contentRef.current!.style.opacity = '0';
      
      setTimeout(() => {
        // Second half - reveal new content
        contentRef.current!.style.transition = 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s, opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1) 0.1s';
        contentRef.current!.style.transform = 'perspective(1200px) rotateY(0deg) scale(1)';
        contentRef.current!.style.opacity = '1';
        
        setTimeout(() => {
          setIsAnimating(false);
          // Remove transition after animation complete
          contentRef.current!.style.transition = '';
        }, 500);
      }, 50);
    }, 200);
  }, [currentIndex, isAnimating]);

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? caseStudies.length - 1 : currentIndex - 1;
    navigateToSlide(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === caseStudies.length - 1 ? 0 : currentIndex + 1;
    navigateToSlide(newIndex);
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section className="min-h-[70vh] bg-gray-50 py-8 md:py-12 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full">
        {/* Carousel Container with scroll-based 3D animation */}
        <div 
          ref={ref}
          className="relative rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl bg-[#760060] overflow-hidden"
          style={{
            transformStyle: 'preserve-3d',
            willChange: 'transform, opacity'
          }}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-72 h-72 bg-purple-300 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-300 rounded-full translate-x-1/3 translate-y-1/3"></div>
          </div>

          {/* Title with scroll-based animation */}
          <h2 
            className="relative text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-8 md:mb-12"
            style={getElementStyle(0)}
          >
            Stories That Speak Results
          </h2>
          
          {/* Navigation Buttons with scroll-based animation */}
          <button
            onClick={handlePrev}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 backdrop-blur-sm"
            style={{ 
              ...getElementStyle(0.1),
              background: 'rgba(123, 31, 162, 0.9)'
            }}
            disabled={isAnimating}
            aria-label="Previous case study"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-500 hover:scale-110 active:scale-95 backdrop-blur-sm"
            style={{ 
              ...getElementStyle(0.1),
              background: 'rgba(123, 31, 162, 0.9)'
            }}
            disabled={isAnimating}
            aria-label="Next case study"
          >
            <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content with flip animation */}
          <div 
            ref={contentRef}
            className="relative bg-white rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl backdrop-blur-sm"
            style={{
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden',
              willChange: 'transform, opacity'
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">
              {/* Left: Logo with scroll-based animation */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div 
                  className="w-full max-w-xs aspect-square rounded-2xl flex items-center justify-center shadow-xl"
                  style={getElementStyle(0.2)}
                >
                  <div className="text-center transform transition-transform duration-1000 hover:scale-105" 
                       style={{ background: '#001529', width: '100%', height: '100%', borderRadius: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200">RF</span>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400">gen</span>
                  </div>
                </div>
              </div>

              {/* Right: Content with staggered scroll animations */}
              <div className="lg:col-span-3 space-y-6 md:space-y-7">
                <h3 
                  className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight"
                  style={getElementStyle(0.3)}
                >
                  {currentStudy.title}
                </h3>

                <div style={getElementStyle(0.4)}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Challenge:</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div style={getElementStyle(0.5)}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">CapabiliQ Approach:</h4>
                  <ul className="space-y-2">
                    {currentStudy.approach.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                        style={getElementStyle(0.5 + (idx * 0.1))}
                      >
                        <span className="text-purple-600 mt-1 flex-shrink-0 text-lg">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={getElementStyle(0.8)}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Outcome:</h4>
                  <ul className="space-y-2">
                    {currentStudy.outcome.map((item, idx) => (
                      <li 
                        key={idx} 
                        className="flex items-start gap-3 text-gray-700 text-sm md:text-base"
                        style={getElementStyle(0.8 + (idx * 0.1))}
                      >
                        <span className="text-purple-600 mt-1 flex-shrink-0 text-lg">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={getElementStyle(1.1)}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-3">Result:</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed bg-gradient-to-r from-gray-50 to-purple-50 p-4 rounded-lg border-l-4 border-purple-600">
                    {currentStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator with scroll-based animation */}
          <div className="flex justify-center gap-3 mt-6 md:mt-8">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => navigateToSlide(idx)}
                disabled={isAnimating}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  idx === currentIndex 
                    ? 'bg-white w-8 shadow-lg' 
                    : 'bg-white/40 w-2 hover:bg-white/60 hover:w-4'
                }`}
                style={getElementStyle(1.2 + (idx * 0.1))}
                aria-label={`Go to case study ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyCarousel;