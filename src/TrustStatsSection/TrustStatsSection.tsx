import  { useEffect, useRef, useState } from 'react';
import businesscard from '../assets/Bussinesscard.jpg';

const TrustStatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
          observer.disconnect();
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

  const getArrowPosition = (position: string) => {
    const base = "absolute w-24 h-24 flex items-center justify-center transition-all duration-1000 ease-out";
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
    const base = "absolute text-center transition-all duration-1000 ease-out";
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

  const getInitialState = (position: string) => {
    switch (position) {
      case "top-left":
        return 'opacity-0 -translate-x-10 -translate-y-10';
      case "top-right":
        return 'opacity-0 translate-x-10 -translate-y-10';
      case "left":
        return 'opacity-0 -translate-x-10';
      case "right":
        return 'opacity-0 translate-x-10';
      case "bottom-left":
        return 'opacity-0 -translate-x-10 translate-y-10';
      case "bottom-right":
        return 'opacity-0 translate-x-10 translate-y-10';
      default:
        return 'opacity-0';
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
          {/* Center Image Circle */}
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}>
            <div className="absolute inset-0 rounded-full border-8 border-black transition-all duration-700 ease-out"></div>
            <div className="absolute inset-4 rounded-full border-4 border-purple-400 overflow-hidden transition-all duration-1000 ease-out">
              <img
                src={businesscard}
                alt="Capabiliq Business Exchange"
                className="w-full h-full object-cover transition-all duration-1000 ease-out"
              />
            </div>
          </div>

          {/* Arrows + Text */}
          {stats.map((stat, i) => (
            <div key={i}>
              {/* Arrow */}
              <div className={`${getArrowPosition(stat.position)} ${
                isVisible ? 'opacity-100 scale-100' : `opacity-0 scale-50 ${getInitialState(stat.position)}`
              }`}
              style={{
                transitionDelay: isVisible ? `${0.5 + (i * 0.1)}s` : '0s'
              }}>
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
              <div className={`${getTextPosition(stat.position)} ${
                isVisible ? 'opacity-100 scale-100' : `opacity-0 scale-50 ${getInitialState(stat.position)}`
              }`}
              style={{
                transitionDelay: isVisible ? `${0.7 + (i * 0.1)}s` : '0s'
              }}>
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

        {/* Heading */}
        <h2 className={`text-5xl md:text-6xl font-bold text-center text-gray-900 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{
          transitionDelay: isVisible ? '1.3s' : '0s'
        }}>
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