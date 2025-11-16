import React from 'react';

interface ServiceCard {
  title: string;
  description: string;
  color: string;
  position: 'top' | 'bottom';
}

const GCCLifecycleServices: React.FC = () => {
  const services: ServiceCard[] = [
    {
      title: 'Business Enablement',
      description: 'We shape your GCC\'s mission, structure, and strategic roadmap to set the foundation for long-term growth and success.',
      color: '#92B732',
      position: 'top'
    },
    {
      title: 'Infrastructure Setup',
      description: 'From location selection to facilities and IT setup — we handle it all for seamless operations.',
      color: '#D3E9FD',
      position: 'bottom'
    },
    {
      title: 'Technology & Solutions',
      description: 'Accelerate digital transformation through cloud, data, analytics, cybersecurity, AI/ML, automation and any IT domain services.',
      color: '#760060',
      position: 'top'
    },
    {
      title: 'Talent Acquisition',
      description: 'We use AI-powered hiring tools and 9-box skill matrices to identify and onboard the best talent for your GCC.',
      color: '#D3E9FD',
      position: 'bottom'
    },
    {
      title: 'Organizational Development',
      description: 'We nurture culture, guide change, and strengthen leadership capabilities—ensuring your GCC is prepared for the future.',
      color: '#92B732',
      position: 'top'
    }
  ];

  return (
    <div className="bg-gray-50 px-4 py-8 md:py-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-center mb-8 md:mb-16 text-gray-900">
          Our GCC Lifecycle Services
        </h1>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center">
              {service.position === 'top' ? (
                <>
                  {/* Text at top */}
                  <div className="text-center max-w-xs mb-4 md:mb-6">
                    <h2 className="text-lg md:text-xl font-semibold mb-2 md:mb-4 text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  {/* Circle at bottom */}
                  <div 
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full" 
                    style={{ backgroundColor: service.color }}
                  />
                </>
              ) : (
                <>
                  {/* Circle at top */}
                  <div 
                    className="w-32 h-32 md:w-48 md:h-48 rounded-full mb-4 md:mb-6" 
                    style={{ backgroundColor: service.color }}
                  />
                  {/* Text at bottom */}
                  <div className="text-center max-w-xs">
                    <h2 className="text-lg md:text-l font-semibold mb-2 md:mb-4 text-gray-900">
                      {service.title}
                    </h2>
                    <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GCCLifecycleServices;