import { useState, useEffect, useRef } from 'react';

const ClientTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Capabiliq's expertise and innovation have streamlined our recruitment, strengthened workforce capabilities, and driven growth. They are a trusted partner in building a future-ready workforce.",
      author: "Vinay K",
      initial: "V"
    },
    {
      id: 2,
      text: "Capabiliq's expertise and innovative approach have enabled PwC to enhance talent strategies and optimize workforce solutions. They are a trusted partner in advancing organizational growth and agility.",
      author: "Shruti", 
      initial: "S"
    },
    {
      id: 3,
      text: "Working with Capabiliq has transformed our talent acquisition process. Their data-driven approach and deep industry knowledge have helped us secure top-tier professionals who align perfectly with our business objectives and culture.",
      author: "F Fathima",
      initial: "F"
    },
    {
      id: 4,
      text: "Capabiliq's strategic partnership has been instrumental in scaling our technical teams efficiently. Their understanding of our specific needs and market dynamics has resulted in exceptional hiring outcomes and reduced time-to-fill.",
      author: "Sunil D",
      initial: "S"
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

  // Create extended array for seamless looping
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section 
      ref={ref}
      className="bg-gray-50 py-6 px-4 sm:px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[100rem] mx-auto">
        {/* Heading */}
        <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center text-gray-900 mb-4 sm:mb-8 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          What Our Clients Say
        </h2>

        {/* Continuous Marquee Container */}
        <div 
          className="relative overflow-hidden py-4 sm:py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Single Marquee Row */}
          <div className={`flex gap-4 sm:gap-6 md:gap-8 ${
            isHovered ? 'marquee-paused' : 'marquee-animate'
          }`}>
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={`marquee-1-${testimonial.id}-${idx}`}
                className="flex-shrink-0 w-[280px] sm:w-80 lg:w-96 px-2"
              >
                <div className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  {/* Testimonial Text */}
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 sm:mb-6 line-clamp-5">
                    {testimonial.text}
                  </p>
                  
                  {/* Author Info with Circle Initial */}
                  <div className="flex items-center gap-3">
                    {/* Circle with Initial - Smaller size with #760060 background */}
                    <div 
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: '#760060' }}
                    >
                      <span className="text-white font-bold text-xs">
                        {testimonial.initial}
                      </span>
                    </div>
                    
                    {/* Name only - company removed */}
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 font-semibold text-sm truncate">
                        {testimonial.author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>

      <style >{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .marquee-animate {
          animation: marquee 60s linear infinite;
        }
        .marquee-paused {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-100% / 3));
            }
          }
        }
      `}</style>
    </section>
  );
};

export default ClientTestimonials;