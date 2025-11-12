import React, { useState, useEffect, useRef } from 'react';

interface TimelineItem {
  id: number;
  title: string;
  content: string;
  position: 'left' | 'right';
}

const JourneyTimeline: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (timelineRef.current) {
        const rect = timelineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const timelineHeight = rect.height;
        
        // Calculate scroll progress (0 to 1)
        const scrolled = windowHeight - rect.top;
        const total = windowHeight + timelineHeight;
        const progress = Math.min(Math.max(scrolled / total, 0), 1);
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      title: 'THE GAP WE SAW',
      content: `India is evolving into Startup India 2.0 — a revolution where innovation is at its peak, yet startups and GCCs often struggle to find the right talent to scale efficiently. On the other side, skilled professionals face challenges in finding opportunities that let them grow with emerging startups.
We started with a vision to bridge this gap — to empower startups and GCCs in India to build stronger teams, faster, and smarter.`,
      position: 'right'
    },
    {
      id: 2,
      title: 'THE BRIDGE WE BUILT',
      content: `Built on the belief that great companies are built by great people, we created a model that aligns the right talent with the right vision. Our foundation is driven by understanding startup DNA — agility, ambition, and adaptability — and delivering talent solutions that fuel that growth.
We didn't just want to fill roles; we wanted to shape journeys — for both founders and professionals ready to grow together.`,
      position: 'left'
    },
    {
      id: 3,
      title: 'THE CHANGE WE\'RE MAKING',
      content: `From a small team to a powerhouse of 40+ passionate professionals, our journey has been one of consistent impact. We achieved good clients by enabling AI-driven RaaS (Recruitment-as-a-Service) to connect startups and GCCs with the talent that accelerates their expansion.
Each partnership we built wasn't just about hiring — it was about helping businesses evolve.`,
      position: 'right'
    },
    {
      id: 4,
      title: 'THE FUTURE WE\'RE BUILDING',
      content: `The next chapter is bigger and bolder. We're currently: Building a product to simplify and automate RaaS operations end-to-end. Expanding our team across tech, growth, and client success. Launching a new client dashboard for transparent, data-led talent engagement. Forming strategic partnerships to strengthen our global reach`,
      position: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-6 px-4 sm:px-4 lg:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header with 3D effect */}
        <h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-20"
          style={{
            transform: `perspective(1000px) rotateX(${scrollProgress * 5}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <span style={{ background: 'linear-gradient(180deg, #6D58D6 0%, #D24B8A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>The Journey</span>
          <span className="text-gray-900"> That Started It All</span>
        </h1>
        
        {/* Timeline */}
        <div className="relative" ref={timelineRef}>
          {/* Central vertical line with progress fill */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 hidden md:block" style={{ background: '#e5e7eb' }} />
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 hidden md:block transition-all duration-300"
            style={{ 
              background: '#760060',
              height: `${scrollProgress * 100}%`,
              top: 0
            }} 
          />

          {/* Top cap */}
          <div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-full hidden md:block">
            <div 
              className="w-3 h-3 rounded-full transition-all duration-300" 
              style={{ 
                background: scrollProgress > 0 ? '#760060' : '#e5e7eb',
                transform: `scale(${scrollProgress > 0 ? 1 + scrollProgress * 0.3 : 1})`
              }} 
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-24">
            {timelineData.map((item, index) => {
              const itemProgress = Math.max(0, Math.min(1, (scrollProgress * timelineData.length) - index));
              const isActive = itemProgress > 0;
              
              return (
                <div
                  key={item.id}
                  className={`relative transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ 
                    transitionDelay: `${index * 200}ms`,
                    transform: `
                      perspective(1000px) 
                      rotateY(${item.position === 'left' ? itemProgress * 5 - 5 : -itemProgress * 5 + 5}deg)
                      translateZ(${itemProgress * 20}px)
                    `
                  }}
                >
                  
                  <div className="md:grid md:grid-cols-2  md:gap-8 items-center">
                    {/* Left side content */}
                    {item.position === 'left' && (
                      <>
                        <div className="mb-8 md:mb-0 md:text-right md:pr-12">
                          <div className="inline-block">
                            <div 
                              className="text-white px-6 py-3 top-6 rounded-full font-semibold text-sm mb-4 inline-block transition-all duration-500" 
                              style={{ 
                                background: '#760060',
                                transform: `scale(${isActive ? 1 : 0.9})`,
                                opacity: isActive ? 1 : 0.5
                              }}
                            >
                              {item.title}
                            </div>
                            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                              {item.content}
                            </p>
                          </div>
                        </div>
                        <div className="hidden md:block" />
                      </>
                    )}

                    {/* Right side content */}
                    {item.position === 'right' && (
                      <>
                        <div className="hidden md:block" />
                        <div className="mb-8 md:mb-0 md:pl-12">
                          <div 
                            className="text-white px-6 py-3 rounded-full font-semibold text-sm mb-2 inline-block transition-all duration-500" 
                            style={{ 
                              background: '#760060',
                              transform: `scale(${isActive ? 1 : 0.9})`,
                              opacity: isActive ? 1 : 0.5
                            }}
                          >
                            {item.title}
                          </div>
                          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                            {item.content}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Circle dot on timeline with animation */}
                  <div className="absolute left-1/2 top-4 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                    <div 
                      className="w-5 h-5 rounded-full border-4 border-white shadow-md transition-all duration-500" 
                      style={{ 
                        background: isActive ? '#760060' : '#e5e7eb',
                        transform: `scale(${isActive ? 1.2 : 1}) rotate(${itemProgress * 360}deg)`,
                        boxShadow: isActive ? '0 0 20px rgba(118, 0, 96, 0.5)' : '0 2px 4px rgba(0,0,0,0.1)'
                      }} 
                    />
                  </div>

                  {/* Mobile dot */}
                  <div className="md:hidden mb-4">
                    <div className="w-4 h-4 rounded-full" style={{ background: '#760060' }} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom cap */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-full hidden md:block">
            <div 
              className="w-3 h-3 rounded-full transition-all duration-300" 
              style={{ 
                background: scrollProgress > 0.9 ? '#760060' : '#e5e7eb',
                transform: `scale(${scrollProgress > 0.9 ? 1.3 : 1})`
              }} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyTimeline;