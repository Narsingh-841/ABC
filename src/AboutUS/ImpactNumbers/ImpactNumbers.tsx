import React, { useEffect, useRef, useState } from 'react';

interface StatItem {
  value: string;
  label: string;
}

const ImpactStats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats: StatItem[] = [
    { value: '12 Hours', label: 'Turnaround Time' },
    { value: '99%', label: 'Match Accuracy' },
    { value: '6x Faster', label: 'Hiring Efficiency' },
    { value: '93%', label: 'Offer-to-Join Ratio' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible && sectionRef.current) {
      const statElements = sectionRef.current.querySelectorAll('.stat-item');
      
      statElements.forEach((element, index) => {
        const htmlElement = element as HTMLElement;
        const delay = index * 150;

        // Reset first
        htmlElement.style.opacity = '0';
        htmlElement.style.transform = 'translateY(40px) scale(0.95)';
        htmlElement.style.transition = 'none';

        setTimeout(() => {
          htmlElement.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
          
          requestAnimationFrame(() => {
            htmlElement.style.opacity = '1';
            htmlElement.style.transform = 'translateY(0) scale(1)';
          });
        }, delay);
      });
    } else if (!isVisible && sectionRef.current) {
      // Reset when out of view
      const statElements = sectionRef.current.querySelectorAll('.stat-item');
      statElements.forEach((element) => {
        const htmlElement = element as HTMLElement;
        htmlElement.style.opacity = '0';
        htmlElement.style.transform = 'translateY(40px) scale(0.95)';
        htmlElement.style.transition = 'none';
      });
    }
  }, [isVisible]);

  return (
    <div className="bg-white py-6 px-4 sm:px-4 lg:px-4">
      <div 
        ref={sectionRef}
        className="max-w-6xl mx-auto rounded-[40px] px-16 py-14"
        style={{
          background: 'linear-gradient(180deg, #6D58D6 0%, #D24B8A 100%)',
          maxWidth: '1160px'
        }}
      >
        {/* Title */}
        <h2 className="text-white text-4xl md:text-5xl font-bold text-center mb-16">
          Numbers That Prove Our Impact
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center" style={{ opacity: 0 }}>
              <div className="text-white text-4xl md:text-5xl font-bold mb-3">
                {stat.value}
              </div>
              <div className="text-white text-base md:text-lg opacity-90">
                {stat.label}
              </div>
            </div>
          ))}

          {/* Manual dividers for better control */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            <div className="absolute left-1/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-px bg-white opacity-30" />
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-px bg-white opacity-30" />
            <div className="absolute left-3/4 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-px bg-white opacity-30" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactStats;