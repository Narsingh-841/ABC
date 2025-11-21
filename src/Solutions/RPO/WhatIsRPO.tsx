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
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-gray-900 text-center lg:text-left">
              What is RPO?
            </h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-sm sm:text-base text-gray-800 leading-relaxed text-justify sm:text-left">
                Recruitment Process Outsourcing (RPO) is a strategic hiring solution where businesses delegate part or all of their recruitment operations to a specialized partner. Unlike traditional staffing vendors who simply share resumes, an RPO partner like Capabiliq works as an extension of your internal team—managing everything from workforce planning to final candidate onboarding.
              </p>

              <p className="text-sm sm:text-base text-gray-800 leading-relaxed text-justify sm:text-left">
                At Capabiliq, our RPO model is agile, tech-enabled, and outcome-driven. Whether you need to scale quickly, hire niche talent, or build large teams across locations, our AI-powered platform and recruitment experts ensure fast, efficient, and high-quality hiring.
              </p>
            </div>

            {/* Key Features */}
            <h3 className="text-xl font-semibold mt-8 mb-4 sm:mb-6 text-gray-900 text-center lg:text-left">
              Key Features:
            </h3>

            <div className="space-y-3 sm:space-y-4">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-gray-800 flex-1">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-1">
            <div 
              className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white"
              style={{ backgroundColor: '#760060' }}
            >
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center lg:text-left">
                Other Key Solutions
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {otherSolutions.map((solution, index) => (
                  <a 
                    key={index} 
                    href={solutionLinks[index]} 
                    className="block text-base sm:text-lg hover:underline transition-all text-center lg:text-left"
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