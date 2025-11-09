import  { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const services = [
    {
      number: "01.",
      title: "Cyber Security",
      description: "Protecting businesses from digital threats through advanced security frameworks, continuous monitoring, and proactive defense strategies."
    },
    {
      number: "02.",
      title: "AI & Data Analytics",
      description: "Transforming raw data into intelligent insights using AI-driven models to optimize decisions and accelerate growth."
    },
    {
      number: "03.",
      title: "Salesforce",
      description: "Empowering customer engagement and automation through customized Salesforce implementations, integrations, and CRM optimization."
    },
    {
      number: "04.",
      title: "Tailor-Made Digital Tech Solutions",
      description: "Building bespoke digital products and systems aligned with your business goals, ensuring efficiency and innovation."
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

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-6 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full rounded-3xl p-12 lg:p-16" style={{ backgroundColor: '#7B1E7A' }}>
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Header */}
          <div className={`text-white lg:col-span-2 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h2 className="text-5xl lg:text-6xl font-bold mb-4">
              Services<br />We Provide
            </h2>
            <p className="text-purple-100 text-lg mb-8 leading-relaxed max-w-md">
              We blend AI automation with industry expertise to offer agile staffing solutions tailored for today's hiring teams.
            </p>
            <button className={`bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
            style={{
              transitionDelay: isVisible ? '0.6s' : '0s'
            }}>
              View Our Services
            </button>
          </div>

          {/* Right Side - Service Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:col-span-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-700 ease-out hover:scale-105 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${0.4 + (index * 0.15)}s` : '0s'
                }}
              >
                <div className="text-6xl font-bold text-[#760060] mb-4">
                  {service.number}
                </div>
                <h3 className="text-2xl font-bold text-[#760060] mb-4">
                  {service.title}
                </h3>
                <p className="text-[#760060] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;