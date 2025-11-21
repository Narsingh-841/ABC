import React, { useEffect, useRef, useState } from 'react';
import ourSp from '../../assets/ourSp.png';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
}

const StreamlinedProcess: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animationApplied = useRef<Set<number>>(new Set());

  const steps: ProcessStep[] = [
    {
      id: '01',
      title: 'Requirement Gathering',
      description: 'Understand client needs, role specifications, and success criteria in detail.'
    },
    {
      id: '02',
      title: 'SME Consultation',
      description: 'Engage Subject Matter Experts to validate technical requirements and skill benchmarks.'
    },
    {
      id: '03',
      title: 'Internal Briefing',
      description: 'Share role details and success profile with the sourcing & recruitment team.'
    },
    {
      id: '04',
      title: 'Multi-Channel Sourcing',
      description: 'Leverage LinkedIn, Naukri, tech communities, events, and referral networks to attract talent.'
    },
    {
      id: '05',
      title: 'AI & SME Screening',
      description: 'Combine AI-driven prescreening with SME technical evaluations for quality shortlisting'
    },
    {
      id: '06',
      title: 'Client Presentation',
      description: 'Share curated profiles with skill summaries, coordinate interviews, and manage feedback to finalize hires.'
    },
    {
      id: '07',
      title: 'Onboarding Support',
      description: 'Handle offers, documentation, and joining assistance for a smooth start.'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          
          if (entry.isIntersecting) {
            setVisibleCards((prev) => new Set([...prev, index]));
          } else {
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
            animationApplied.current.delete(index);
            
            const card = cardRefs.current[index];
            if (card) {
              card.style.opacity = '0';
              card.style.transform = '';
            }
          }
        });
      },
      { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card && visibleCards.has(index) && !animationApplied.current.has(index)) {
        animationApplied.current.add(index);
        
        const animationType = index % 3;
        const delay = (index % 3) * 150;

        setTimeout(() => {
          if (animationType === 0) {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.9s ease-out';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else if (animationType === 1) {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            card.style.transition = 'all 0.9s ease-out';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            });
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateX(-30px)';
            card.style.transition = 'all 0.9s ease-out';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateX(0)';
            });
          }
        }, delay);
      }
    });
  }, [visibleCards]);

  return (
    <div className="bg-white  relative overflow-hidden">
      <div className="mx-auto">
        {/* Background Image Container - Full width */}
        <div className="relative w-full">
          {/* Background Image - Cover entire width with proper height */}
          <div className="absolute inset-0 z-0 w-full h-full">
            <img
              src={ourSp}
              alt="Streamlined Process Background"
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Heading - Responsive for all screens */}
          <div className="relative z-10 pt-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center mb-8 md:mb-20 px-4 text-gray-900">
              Our Streamlined Process
            </h1>
          </div>
          
          {/* Cards Grid - 4 cards in first row, 3 cards in second row */}
          <div className="relative z-10 pb-12">
            {/* First Row - 4 cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12 px-8">
              {steps.slice(0, 4).map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  data-index={index}
                  className="flex flex-col items-center text-center"
                  style={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: '#760060' }}>
                    <span className="text-3xl font-bold text-white">{step.id}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Second Row - 3 cards centered */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 md:mx-auto md:max-w-4xl px-4">
              {steps.slice(4, 7).map((step, index) => (
                <div
                  key={step.id}
                  ref={(el) => {
                    cardRefs.current[index + 4] = el;
                  }}
                  data-index={index + 4}
                  className="flex flex-col items-center text-center"
                  style={{ opacity: 0 }}
                >
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg hover:shadow-xl transition-shadow" style={{ backgroundColor: '#760060' }}>
                    <span className="text-3xl font-bold text-white">{step.id}</span>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-700 leading-relaxed text-sm md:text-base max-w-xs">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StreamlinedProcess;