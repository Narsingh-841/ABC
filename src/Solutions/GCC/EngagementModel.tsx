import React from 'react';

interface EngagementModel {
  number: string;
  title: string;
  description: string;
}

const FlexibleEngagementModels: React.FC = () => {
  const models: EngagementModel[] = [
    {
      number: '01.',
      title: 'Build–Operate–Transfer (BOT)',
      description: 'We design, manage, and transfer your GCC once it\'s fully operational.'
    },
    {
      number: '02.',
      title: 'Joint Venture',
      description: 'Collaborate with CapabiliQ to build and run a shared GCC with shared ownership and vision.'
    },
    {
      number: '03.',
      title: 'GCC Within Capabiliq Premises',
      description: 'Launch faster by operating within our facilities — reducing setup time, cost, and complexity.'
    }
  ];

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900">
            Flexible Engagement Models
          </h1>
          <p className="text-xl text-gray-700">
            Choose the model that fits your growth journey
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {models.map((model, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <h2 className="text-6xl font-bold mb-6 text-gray-900">
                {model.number}
              </h2>
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {model.title}
              </h3>
              <p className="text-base leading-relaxed" style={{ color: '#760060' }}>
                {model.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlexibleEngagementModels;