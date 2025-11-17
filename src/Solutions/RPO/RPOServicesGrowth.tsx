import React from 'react';
import Rpoimage from '../../assets/RPOIMAGE.jpeg';

interface ServiceCard {
  number: string;
  title: string;
  description: string;
  color: 'purple' | 'green';
}

const RPOServicesGrowth: React.FC = () => {
  const services: ServiceCard[] = [
    {
      number: '01.',
      title: '95% Client Retention',
      description: 'We focus on delivering strong results. Capabiliq is a trusted RPO partner for high-growth enterprises.',
      color: 'purple'
    },
    {
      number: '02.',
      title: '50% Faster Hiring',
      description: 'Our AI-enabled workflows reduce manual effort and accelerate hiring with streamlined, data-driven processes.',
      color: 'green'
    },
    {
      number: '03.',
      title: '40% Cost Savings',
      description: 'Lower hiring costs while maintaining top-quality talent through Capabiliq\'s efficient RPO solutions.',
      color: 'green'
    },
    {
      number: '04.',
      title: '98% Accuracy',
      description: 'Our proven hiring framework ensures exceptional accuracy, backed by expert teams and intelligent automation.',
      color: 'purple'
    },
    {
      number: '05.',
      title: '1,000+ Hires Annually',
      description: 'Capabiliq delivers 1,000+ successful hires every year across contract, C2H, and permanent roles.',
      color: 'purple'
    }
  ];

  return (
    <div className="bg-white py-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 sm:mb-6 text-gray-900 px-2">
            RPO Services that Drive Growth for Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto px-2">
            Leading enterprises trust Capabiliq to meet their hiring demands with speed, precision, and consistency.
          </p>
        </div>

        {/* Content Grid */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - Image */}
          <div className="flex items-center justify-center order-2 lg:order-1 w-full">
            <img 
              src={Rpoimage} 
              alt="RPO Services and Growth" 
              className="w-full max-w-sm h-128 sm:max-w-md rounded-3xl shadow-lg object-cover aspect-square"
            />
          </div>

          {/* Right Side - Service Cards */}
          <div className="order-1 lg:order-2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:h-[500px] w-full">
            {/* First 4 cards */}
            {services.slice(0, 4).map((service, index) => (
              <div
                key={index}
                className={`rounded-3xl p-4 sm:p-5 flex flex-col ${
                  service.color === 'purple' 
                    ? 'bg-purple-200' 
                    : 'bg-green-400'
                }`}
              >
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                  {service.number}
                </h3>
                <div className="flex-1">
                  <h4 className="text-sm sm:text-base font-semibold mb-2 text-gray-900 leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-xs text-gray-800 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Fifth card - full width on mobile, spans 2 columns on larger screens */}
            <div className="col-span-1 sm:col-span-2">
              <div
                className="rounded-3xl p-4 sm:p-6 bg-purple-200 h-full"
              >
                <div className="flex flex-col sm:flex-row sm:gap-4 items-start">
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 flex-shrink-0 mb-2 sm:mb-0">
                    {services[4].number}
                  </h3>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold mb-2 text-gray-900">
                      {services[4].title}
                    </h4>
                    <p className="text-xs text-gray-800 leading-relaxed">
                      {services[4].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPOServicesGrowth;