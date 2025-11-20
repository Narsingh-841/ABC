import React from 'react';

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  variant: 'purple' | 'green';
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, variant }) => {
  const bgColor = variant === 'purple' ? 'bg-purple-200' : 'bg-green-400';
  const textColor = variant === 'purple' ? 'text-black' : 'text-black';
  
  return (
    <div className={`${bgColor} ${textColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm h-full flex flex-col`}>
      <div className="flex items-start gap-4 sm:gap-6 flex-1">
        <div className="text-4xl sm:text-5xl lg:text-6xl font-bold flex-shrink-0">{number}</div>
        <div className="pt-1 sm:pt-2 flex-1">
          <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>{title}</h3>
          <p className="text-sm sm:text-base leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center py-6 sm:py-8">
      <div className="max-w-7xl w-full bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 lg:px-12 lg:py-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-6 sm:mb-8" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>How it Works?</h1>
        
        {/* Mobile View - Simple vertical layout in order */}
        <div className="lg:hidden space-y-4">
          <StepCard
            number="01."
            title="Share Your Hiring Needs"
            description="Tell us who you're looking for - role, skills, and experience."
            variant="purple"
          />
          <StepCard
            number="02."
            title="Get Pre-Vetted Candidates Fast"
            description="We match top talent aligned with your startup's goals and culture."
            variant="green"
          />
          <StepCard
            number="03."
            title="Interview & Select"
            description="Move from shortlist to hire in record time."
            variant="purple"
          />
          <StepCard
            number="04."
            title="Free BGVs on First 5 Hires"
            description="Because trust and transparency matter."
            variant="green"
          />
        </div>

        {/* Desktop View - Custom grid layout */}
        <div className="hidden lg:block space-y-6">
          {/* Top Row */}
          <div className="grid grid-cols-2 gap-x-32">
            {/* Step 01 */}
            <div className="h-full">
              <StepCard
                number="01."
                title="Share Your Hiring Needs"
                description="Tell us who you're looking for - role, skills, and experience."
                variant="purple"
              />
            </div>
            
            {/* Step 03 */}
            <div className="h-full">
              <StepCard
                number="03."
                title="Interview & Select"
                description="Move from shortlist to hire in record time."
                variant="purple"
              />
            </div>
          </div>
          
          {/* Bottom Row */}
          <div className="flex flex-row gap-4 justify-center px-12">
            {/* Step 02 */}
            <div className="flex-1 max-w-md h-full">
              <StepCard
                number="02."
                title="Get Pre-Vetted Candidates Fast"
                description="We match top talent aligned with your startup's goals and culture."
                variant="green"
              />
            </div>
            
            {/* Step 04 */}
            <div className="flex-1 max-w-md h-full">
              <StepCard
                number="04."
                title="Free BGVs on First 5 Hires"
                description="Because trust and transparency matter."
                variant="green"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;