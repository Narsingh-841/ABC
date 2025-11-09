import { useState, useEffect, useRef } from 'react';

const CaseStudyCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1));
  };

  const currentStudy = caseStudies[currentIndex];

  return (
    <section ref={ref} className="min-h-[60vh] bg-gray-50 py-6 px-4 md:px-6 flex items-center justify-center">
      <div className="max-w-7xl  ">
        {/* Carousel Container */}
        <div className="relative rounded-3xl p-4 md:p-8 lg:p-10 shadow-2xl bg-[#760060]">
          {/* Title */}
          <h2 className={`text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 md:mb-8 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            Stories That Speak Results
          </h2>
          
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className={`absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{ background: '#7B1FA2' }}
            aria-label="Previous case study"
          >
            <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className={`absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
            style={{ background: '#7B1FA2' }}
            aria-label="Next case study"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Content */}
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-10">
              {/* Left: Logo - Takes 2 columns */}
              <div className="lg:col-span-2 flex items-center justify-center">
                <div className={`w-full max-w-xs aspect-square rounded-2xl flex items-center justify-center shadow-xl transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`} 
                  style={{ 
                    background: '#001529',
                    transitionDelay: isVisible ? '0.3s' : '0s'
                  }}>
                  <div className="text-center">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-200">RF</span>
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-green-400">gen</span>
                  </div>
                </div>
              </div>

              {/* Right: Content - Takes 3 columns */}
              <div className="lg:col-span-3 space-y-4 md:space-y-5">
                <h3 className={`text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: isVisible ? '0.4s' : '0s'}}>
                  {currentStudy.title}
                </h3>

                <div className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: isVisible ? '0.5s' : '0s'}}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Challenge:</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {currentStudy.challenge}
                  </p>
                </div>

                <div className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: isVisible ? '0.6s' : '0s'}}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">CapabiliQ Approach:</h4>
                  <ul className="space-y-1">
                    {currentStudy.approach.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm md:text-base transition-all duration-700"
                          style={{
                            transitionDelay: isVisible ? `${0.7 + (idx * 0.1)}s` : '0s',
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                          }}>
                        <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: isVisible ? '1.0s' : '0s'}}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Outcome:</h4>
                  <ul className="space-y-1">
                    {currentStudy.outcome.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm md:text-base transition-all duration-700"
                          style={{
                            transitionDelay: isVisible ? `${1.1 + (idx * 0.1)}s` : '0s',
                            opacity: isVisible ? 1 : 0,
                            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
                          }}>
                        <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{transitionDelay: isVisible ? '1.4s' : '0s'}}>
                  <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2">Result:</h4>
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {currentStudy.result}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4">
            {caseStudies.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-white w-6' : 'bg-white/40 w-2 hover:bg-white/60'
                } ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
                }`}
                style={{
                  transitionDelay: isVisible ? `${1.6 + (idx * 0.1)}s` : '0s'
                }}
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