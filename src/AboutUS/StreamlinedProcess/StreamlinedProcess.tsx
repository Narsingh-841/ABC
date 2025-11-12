import React, { useEffect, useRef, useState } from 'react';

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
            // Reset when card leaves viewport
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(index);
              return newSet;
            });
            animationApplied.current.delete(index);
            
            // Reset card state
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
            // Fade In Up
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            card.style.transition = 'all 0.9s ease-out';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          } else if (animationType === 1) {
            // Scale In
            card.style.opacity = '0';
            card.style.transform = 'scale(0.9)';
            card.style.transition = 'all 0.9s ease-out';
            requestAnimationFrame(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            });
          } else {
            // Slide In Left
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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-16 text-gray-900">
          Our Streamlined Process
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden shadow-lg">
          {steps.map((step, index) => {
            const isLastItem = index === steps.length - 1;
            
            return (
              <div
                key={step.id}
                ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                data-index={index}
                className={`bg-white p-8 flex flex-col items-center text-center hover:bg-gray-50 transition-colors ${
                  isLastItem ? 'md:col-start-2' : ''
                }`}
                style={{ opacity: 0 }}
              >
                <div className="w-16 h-16 bg-purple-900 rounded-2xl flex items-center justify-center mb-6">
                  <span className="text-white text-2xl font-bold">{step.id}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StreamlinedProcess;