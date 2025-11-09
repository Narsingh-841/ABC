
import  { useEffect, useRef, useState } from 'react';
import { Brain, Clock, Users, Target, Repeat, TrendingUp } from 'lucide-react';

const ConfidenceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className={`text-5xl md:text-6xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          Hire with Confidence, Not Guesswork.
        </h2>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-40 gap-y-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className={`text-center max-w-sm mx-auto transition-all duration-700 ease-out hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.3 + (index * 0.1)}s` : '0s'
                }}
              >
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 hover:scale-110 hover:shadow-lg" style={{ backgroundColor: '#7B1E7A' }}>
                  <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4 min-h-[4rem] flex items-center justify-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed text-lg">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ConfidenceSection;