import React, { useEffect, useRef, useState } from 'react';

const HiringProcessTimeline: React.FC = () => {
  const [animatedStep, setAnimatedStep] = useState<number>(-1);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const timelineRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      title: 'Discovery Call',
      description: 'A brief discussion to understand your roles, priorities, and timelines.',
      icon: (
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <rect x="10" y="10" width="100" height="60" rx="4" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
          <circle cx="25" cy="22" r="3" fill="#EF4444"/>
          <circle cx="33" cy="22" r="3" fill="#FBBF24"/>
          <circle cx="41" cy="22" r="3" fill="#10B981"/>
          <rect x="25" y="35" width="40" height="30" rx="2" fill="#E0E7FF"/>
          <circle cx="45" cy="43" r="6" fill="#760060"/>
          <rect x="35" cy="51" width="20" height="8" rx="1" fill="#10B981"/>
          <rect x="70" y="35" width="30" height="4" rx="1" fill="#E5E7EB"/>
          <rect x="70" y="42" width="25" height="3" rx="1" fill="#E5E7EB"/>
          <rect x="70" y="48" width="28" height="3" rx="1" fill="#E5E7EB"/>
        </svg>
      )
    },
    {
      title: 'Intelligent Matching',
      description: 'We share a curated list of qualified, pre-vetted candidates aligned with your requirements.',
      icon: (
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <circle cx="35" cy="35" r="12" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="2"/>
          <circle cx="60" cy="35" r="12" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="2"/>
          <circle cx="85" cy="35" r="12" fill="#E0E7FF" stroke="#C7D2FE" strokeWidth="2"/>
          <path d="M35 47 L35 55 M60 47 L60 55 M85 47 L85 55" stroke="#C7D2FE" strokeWidth="2"/>
          <circle cx="60" cy="65" r="8" fill="#760060"/>
          <path d="M55 65 L58 68 L65 61" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      title: 'Interview Scheduling',
      description: 'You interview the shortlisted candidates; Capabiliq handles all coordination and logistics.',
      icon: (
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <rect x="20" y="15" width="80" height="55" rx="3" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="20" y="15" width="80" height="12" rx="3" fill="#760060"/>
          <circle cx="30" cy="21" r="2" fill="white"/>
          <circle cx="38" cy="21" r="2" fill="white"/>
          {[0, 1, 2, 3].map((row) => (
            <g key={row}>
              {[0, 1, 2, 3, 4, 5].map((col) => (
                <rect
                  key={col}
                  x={28 + col * 13}
                  y={35 + row * 10}
                  width="8"
                  height="6"
                  rx="1"
                  fill={row === 2 && col === 2 ? "#760060" : "#E5E7EB"}
                  className={`transition-all duration-500 ${
                    isVisible && animatedStep >= 2 ? 'animate-pulse-custom' : ''
                  }`}
                  style={{ animationDelay: `${col * 100 + row * 200}ms` }}
                />
              ))}
            </g>
          ))}
          {/* Animated checkmark for the selected date */}
          <g className={`transition-all duration-700 ${
            isVisible && animatedStep >= 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <circle cx="60" cy="55" r="12" fill="#10B981" className={
              isVisible && animatedStep >= 2 ? 'animate-ping-slow' : ''
            } />
            <circle cx="60" cy="55" r="10" fill="#10B981" />
            <path 
              d="M56 55 L58 57 L64 51" 
              stroke="white" 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className={`transition-all duration-300 ${
                isVisible && animatedStep >= 2 ? 'delay-500 opacity-100' : 'opacity-0'
              }`}
            />
          </g>
        </svg>
      )
    },
    {
      title: 'Offer & Onboarding',
      description: 'We manage post-selection tasks, including contracts, documentation, and onboarding.',
      icon: (
        <svg viewBox="0 0 120 80" className="w-full h-full">
          <rect x="25" y="15" width="70" height="55" rx="3" fill="#F3F4F6" stroke="#E5E7EB" strokeWidth="2"/>
          <rect x="35" y="25" width="50" height="4" rx="1" fill="#E5E7EB"/>
          <rect x="35" y="33" width="45" height="3" rx="1" fill="#E5E7EB"/>
          <rect x="35" y="39" width="50" height="3" rx="1" fill="#E5E7EB"/>
          <rect x="35" y="45" width="40" height="3" rx="1" fill="#E5E7EB"/>
          <rect x="35" y="51" width="48" height="3" rx="1" fill="#E5E7EB"/>
          <circle cx="95" cy="55" r="15" fill="#760060"/>
          <path d="M88 55 L92 59 L102 49" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Reset and restart animations
            setAnimatedStep(-1);
            setTimeout(() => {
              steps.forEach((_, index) => {
                setTimeout(() => {
                  setAnimatedStep(index);
                }, index * 600);
              });
            }, 100);
          } else {
            // Reset when out of view
            setIsVisible(false);
            setAnimatedStep(-1);
          }
        });
      },
      { 
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentRef = timelineRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={timelineRef} className="w-full max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 bg-white px-4 sm:px-6 lg:px-8">
      <h1 
        className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-8 sm:mb-12 lg:mb-16 text-gray-900 transition-all duration-700 ${
          isVisible && animatedStep >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif', fontWeight: 600 }}
      >
        How Capabiliq Delivers Seamless Hiring
      </h1>
      
      <div className="relative">
        {/* Mobile Vertical Layout */}
        <div className="lg:hidden space-y-8 sm:space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Mobile timeline connector */}
              {index > 0 && (
                <div 
                  className={`w-0.5 h-6 sm:h-8 bg-gray-300 mb-2 transition-all duration-1000 ${
                    isVisible && animatedStep >= index ? 'bg-[#760060]' : ''
                  }`}
                />
              )}
              
              {/* Icon container */}
              <div 
                className={`w-20 h-16 sm:w-28 sm:h-24 bg-white border-2 rounded-lg flex items-center justify-center p-2 sm:p-3 shadow-sm transition-all duration-700 ${
                  isVisible && animatedStep >= index 
                    ? 'opacity-100 scale-105 border-[#760060] shadow-lg translate-y-0' 
                    : 'opacity-0 scale-95 border-gray-200 translate-y-8'
                } ${
                  isVisible && index === 2 && animatedStep >= 2 ? 'animate-bounce-slow' : ''
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {step.icon}
              </div>

              {/* Step indicator for mobile */}
              <div 
                className={`w-6 h-6 rounded-full flex items-center justify-center mt-3 mb-2 transition-all duration-500 ${
                  isVisible && animatedStep >= index 
                    ? 'bg-[#760060] scale-125 ring-4 ring-[#760060]/20' 
                    : 'bg-gray-400 scale-100'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <span className="text-xs font-semibold text-white">{index + 1}</span>
              </div>

              {/* Content */}
              <h3 
                className={`text-base sm:text-lg font-semibold mb-2 transition-all duration-700 ${
                  isVisible && animatedStep >= index 
                    ? 'opacity-100 translate-y-0 text-[#760060]' 
                    : 'opacity-0 translate-y-4 text-gray-900'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {step.title}
              </h3>
              
              <p 
                className={`text-xs sm:text-sm text-black leading-relaxed transition-all duration-700 px-2 ${
                  isVisible && animatedStep >= index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Desktop Horizontal Layout */}
        <div className="hidden lg:block px-4 xl:px-12">
          {/* Icons Section - Above the timeline */}
          <div className="grid grid-cols-4 gap-4 xl:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Icon container with animation */}
                <div 
                  className={`w-28 h-20 xl:w-36 xl:h-28 bg-white border-2 rounded-lg flex items-center justify-center p-3 xl:p-4 shadow-sm transition-all duration-700 ${
                    isVisible && animatedStep >= index 
                      ? 'opacity-100 scale-105 border-[#760060] shadow-lg translate-y-0' 
                      : 'opacity-0 scale-95 border-gray-200 translate-y-8'
                  } ${
                    isVisible && index === 2 && animatedStep >= 2 ? 'animate-bounce-slow' : ''
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {step.icon}
                </div>
              </div>
            ))}
          </div>
          
          {/* Timeline line */}
          <div className="relative mt-6 mb-12 xl:mb-16">
            <div 
              className="absolute left-0 h-0.5 bg-gray-300 transition-all duration-300"
              style={{ 
                top: '50%', 
                transform: 'translateY(-50%)',
                width: '100%'
              }}
            >
              {/* Animated progress line */}
              <div 
                className="absolute h-0.5 bg-[#760060] transition-all duration-1000 ease-out"
                style={{ 
                  width: isVisible ? '100%' : '0%'
                }}
              />
              
              {/* Animated dots */}
              {steps.map((_, index) => (
                <div
                  key={index}
                  className={`absolute w-3 h-3 rounded-full transition-all duration-500 ${
                    isVisible && animatedStep >= index 
                      ? 'bg-[#760060] scale-125 ring-4 ring-[#760060]/20' 
                      : 'bg-gray-400 scale-100'
                  }`}
                  style={{ 
                    left: `${(index * 25) + 12.5}%`, 
                    top: '50%', 
                    transform: 'translateY(-50%)',
                    transitionDelay: `${index * 200}ms`
                  }}
                ></div>
              ))}
            </div>
          </div>
          
          {/* Text Section - Below the timeline */}
          <div className="grid grid-cols-4 gap-4 xl:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                {/* Title with animation */}
                <h3 
                  className={`text-base xl:text-lg font-semibold mb-2 xl:mb-3 transition-all duration-700 ${
                    isVisible && animatedStep >= index 
                      ? 'opacity-100 translate-y-0 text-[#760060]' 
                      : 'opacity-0 translate-y-4 text-gray-900'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {step.title}
                </h3>
                
                {/* Description with animation */}
                <p 
                  className={`text-xs xl:text-sm text-black leading-relaxed transition-all duration-700 ${
                    isVisible && animatedStep >= index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style >{`
        @keyframes pulse-custom {
          0%, 100% { 
            fill: #E5E7EB;
            transform: scale(1);
          }
          50% { 
            fill: #760060;
            transform: scale(1.1);
          }
        }
        @keyframes ping-slow {
          0% { 
            transform: scale(1); 
            opacity: 0.8; 
          }
          75%, 100% { 
            transform: scale(2.5); 
            opacity: 0; 
          }
        }
        @keyframes bounce-slow {
          0%, 100% { 
            transform: translateY(0); 
          }
          50% { 
            transform: translateY(-8px); 
          }
        }
        .animate-pulse-custom {
          animation: pulse-custom 2s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HiringProcessTimeline;