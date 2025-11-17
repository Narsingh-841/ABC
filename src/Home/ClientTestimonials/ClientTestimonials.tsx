import  { useState, useEffect, useRef } from 'react';

const ClientTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Capabiliq's expertise and innovation have streamlined our recruitment, strengthened workforce capabilities, and driven growth. They are a trusted partner in building a future-ready workforce.",
      author: "Sr. Manager Talent Acquisition, TTEC Digital"
    },
    {
      id: 2,
      text: "Capabiliq's expertise and innovative approach have enabled PwC to enhance talent strategies and optimize workforce solutions. They are a trusted partner in advancing organizational growth and agility.",
      author: "Sr. Manager, PwC"
    },
    {
      id: 3,
      text: "Working with Capabiliq has transformed our talent acquisition process. Their data-driven approach and deep industry knowledge have helped us secure top-tier professionals who align perfectly with our business objectives and culture.",
      author: "Head of HR, Zensar"
    },
    {
      id: 4,
      text: "Capabiliq's strategic partnership has been instrumental in scaling our technical teams efficiently. Their understanding of our specific needs and market dynamics has resulted in exceptional hiring outcomes and reduced time-to-fill.",
      author: "Director Talent Acquisition, Yash Technologies"
    },
    {
      id: 5,
      text: "The Capabiliq team demonstrates remarkable expertise in identifying and attracting high-caliber talent. Their proactive approach and quality of service have significantly enhanced our recruitment effectiveness and business performance.",
      author: "VP Human Resources, Trantor"
    },
    {
      id: 6,
      text: "Capabiliq's innovative recruitment solutions have empowered us to build competitive teams in a challenging market. Their commitment to understanding our unique requirements delivers consistent value and strategic advantage.",
      author: "Chief People Officer, Incedo"
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

  // Create extended array for seamless looping (3 sets for smooth continuous animation)
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section 
      ref={ref}
      className="bg-gray-50 py-6 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[100rem] mx-auto">
        {/* Heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          What Our Clients Say
        </h2>

        {/* Continuous Marquee Container - Single Line Only */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Single Marquee Row */}
          <div className={`flex gap-8 ${
            isHovered ? 'marquee-paused' : 'marquee-animate'
          }`}>
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={`marquee-1-${testimonial.id}-${idx}`}
                className="flex-shrink-0 w-80 lg:w-96 px-2"
              >
                <div className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:scale-105 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-5">
                    {testimonial.text}
                  </p>
                  <p className="text-gray-900 font-semibold text-right text-sm">
                    - {testimonial.author}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;