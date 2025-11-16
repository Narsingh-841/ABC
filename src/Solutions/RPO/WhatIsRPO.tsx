import React from 'react';
import { Check } from 'lucide-react';

const WhatIsRPO: React.FC = () => {
  const keyFeatures = [
    'Dedicated recruitment team and account manager',
    'AI-driven sourcing and structured interviewing',
    'End-to-end lifecycle management',
    'Transparent SLAs and actionable reporting',
    'Flexible engagement models (short- or long-term)'
  ];

  const otherSolutions = ['Staffing', 'Startups', 'GCC'];
  const solutionLinks = ['/staffing', '/startups', '/gcc'];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-900">
              What is RPO?
            </h2>

            <p className="text-base text-gray-800 mb-6 leading-relaxed text-justify">
              Recruitment Process Outsourcing (RPO) is a strategic hiring solution where businesses delegate part or all of their recruitment operations to a specialized partner. Unlike traditional staffing vendors who simply share resumes, an RPO partner like Capabiliq works as an extension of your internal team—managing everything from workforce planning to final candidate onboarding.
            </p>

            <p className="text-base text-gray-800 mb-8 leading-relaxed text-justify">
              At Capabiliq, our RPO model is agile, tech-enabled, and outcome-driven. Whether you need to scale quickly, hire niche talent, or build large teams across locations, our AI-powered platform and recruitment experts ensure fast, efficient, and high-quality hiring.
            </p>

            {/* Key Features */}
            <h3 className="text-xl font-semibold mb-6 text-gray-900">
              Key Features:
            </h3>

            <div className="space-y-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-base text-gray-800">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div 
              className="rounded-3xl p-8 text-white"
              style={{ backgroundColor: '#760060' }}
            >
              <h3 className="text-xl font-semibold mb-6">
                Other Key Solutions
              </h3>
              <div className="space-y-4">
                {otherSolutions.map((solution, index) => (
                  <a 
                    key={index} 
                    href={solutionLinks[index]} 
                    className="block text-lg hover:underline transition-all"
                  >
                    {solution}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIsRPO;