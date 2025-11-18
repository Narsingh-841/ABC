import React from 'react';
import { FaUsers, FaCloud, FaBuilding, FaLaptopCode, FaBriefcase, FaUserTie } from 'react-icons/fa';

interface UseCase {
  title: string;
  description: string;
  icon: React.ReactElement;
}

export default function RPOUseCases(): React.ReactElement {
  const useCases: UseCase[] = [
    {
      title: 'Tech Hiring for a Fintech Unicorn',
      description: 'Scaled a backend and data team of 40 engineers in 6 weeks using AI-led interviews and targeted outreach across Bangalore and Pune.',
      icon: React.createElement(FaUsers, { className: "w-6 h-6 text-white" })
    },
    {
      title: 'Salesforce Expansion for an EdTech Company',
      description: 'Executed an agile hiring sprint to onboard 100+ sales representatives across 8 Tier-2 cities within 30 days.',
      icon: React.createElement(FaCloud, { className: "w-6 h-6 text-white" })
    },
    {
      title: 'GCC Expansion Support for a BFSI Major',
      description: 'Partnered with a leading enterprise to build a 300-member capability center in India—managing sourcing, interview panels, and end-to-end onboarding.',
      icon: React.createElement(FaBuilding, { className: "w-6 h-6 text-white" })
    },
    {
      title: 'Remote Engineering Teams for a US Startup',
      description: 'Built and managed a remote team of 20 developers across India with dashboards, skill matching, and compliance tracking.',
      icon: React.createElement(FaLaptopCode, { className: "w-6 h-6 text-white" })
    },
    {
      title: 'Contract Workforce Ramp-Up for a Retail Giant',
      description: 'Scaled to 150+ hires in 45 days across 20+ cities, handling sourcing, compliance, and onboarding.',
      icon: React.createElement(FaBriefcase, { className: "w-6 h-6 text-white" })
    },
    {
      title: 'Leadership Hiring for a SaaS Product Company',
      description: 'Filled key Product, Engineering, and Growth roles—cutting time-to-fill from 90 to 35 days with AI-driven shortlisting.',
      icon: React.createElement(FaUserTie, { className: "w-6 h-6 text-white" })
    }
  ];

  return (
    <div className="bg-gray-50 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12 text-gray-900">
          RPO Use Cases
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {useCases.map((useCase: UseCase, index: number) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'linear-gradient(to bottom, #A855F7 0%, #EC4899 100%)'
                    }}
                  >
                    {useCase.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {useCase.title}
                  </h3>
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: '#760060' }}
                  >
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}