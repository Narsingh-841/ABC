import  { useState, useEffect, useRef } from 'react';

const ClientTestimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      id: 1,
      text: "Capabiliq team has been an excellent partner in helping us close some of our most critical and time-sensitive positions. Their understanding of our requirements, speed of execution, and commitment to quality have been impressive. With their support, we were able to onboard the right talent quickly, which has made a significant impact on our business. We truly value this partnership and look forward to continuing to work together in the future.",
      author: "Lead Talent Acquisition, Trantor"
    },
    {
      id: 2,
      text: "The level of professionalism and dedication shown by Capabiliq is remarkable. They consistently deliver top-tier candidates and have become an integral part of our hiring strategy. Their team's expertise in the tech industry is particularly impressive.",
      author: "HR Director, TechCorp Inc."
    },
    {
      id: 3,
      text: "Working with Capabiliq has transformed our recruitment process. Their innovative approach and deep market knowledge have helped us secure exceptional talent that drives our company forward. Highly recommended!",
      author: "CEO, Startup Ventures"
    },
    {
      id: 4,
      text: "Capabiliq's ability to understand our unique culture and find candidates who are not just skilled but also great cultural fits has been invaluable. They've significantly reduced our time-to-hire.",
      author: "Talent Manager, Growth Labs"
    },
    {
      id: 5,
      text: "Outstanding service and results! Capabiliq has helped us build our entire engineering team with candidates who exceeded our expectations. Their partnership has been crucial to our success.",
      author: "CTO, Innovation Systems"
    },
    {
      id: 6,
      text: "The team at Capabiliq goes above and beyond to ensure we find the right talent. Their personalized approach and commitment to quality make them stand out in the recruitment industry.",
      author: "VP Operations, Enterprise Solutions"
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
      className=" bg-gray-50 py-6 px-6 flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-[100rem] mx-auto">
        {/* Heading */}
        <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-900 mb-4 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          What Our Clients Say
        </h2>

        {/* Continuous Marquee Container */}
        <div 
          className="relative overflow-hidden py-8"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* First Marquee Row */}
          <div className={`flex gap-8 mb-8 ${
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

          {/* Second Marquee Row (reverse direction) */}
          <div className={`flex gap-8 ${
            isHovered ? 'marquee-paused' : 'marquee-animate-reverse'
          }`}>
            {extendedTestimonials.map((testimonial, idx) => (
              <div
                key={`marquee-2-${testimonial.id}-${idx}`}
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