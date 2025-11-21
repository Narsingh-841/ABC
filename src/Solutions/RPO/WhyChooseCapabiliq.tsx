import { Brain, Globe, DollarSign, Clock, Settings, BarChart3 } from 'lucide-react';
import cardbg from "../../assets/cardbg.png"; // Make sure to import your background image

interface Reason {
  title: string;
  description: string;
}

export default function WhyChooseCapabiliq() {
  const reasons: Reason[] = [
    {
      title: 'AI-Driven Hiring Process',
      description: 'Capabiliq\'s AI-enabled workflows automate screening, scheduling, and interviews—reducing manual effort and enabling faster, unbiased shortlisting at scale.'
    },
    {
      title: 'Global Talent Access',
      description: 'With access to a large pool of vetted engineers, and professionals across levels and regions, Capabiliq ensures you never run short of high-quality talent.'
    },
    {
      title: 'Lower Cost per Hire',
      description: 'Our RPO model offers fixed, transparent pricing—no hidden markups or inflated commissions, just predictable hiring costs aligned with outcomes.'
    },
    {
      title: 'Faster Hiring, Less Downtime',
      description: 'Capabiliq reduces time-to-hire significantly with AI interviews, structured evaluations, and ready talent pipelines—helping your teams scale faster.'
    },
    {
      title: 'Fully Customizable RPO Models',
      description: 'Every hiring requirement is unique. Capabiliq offers flexible RPO models—from full-cycle hiring to modular support—tailored to your needs.'
    },
    {
      title: 'Real-Time Visibility & Reporting',
      description: 'Monitor every stage of your hiring process with live dashboards, weekly updates, and transparent scorecards for pipeline health and fulfillment metrics.'
    }
  ];

  const icons = [
    <Brain className="w-6 h-6 md:w-7 md:h-7" />,
    <Globe className="w-6 h-6 md:w-7 md:h-7" />,
    <DollarSign className="w-6 h-6 md:w-7 md:h-7" />,
    <Clock className="w-6 h-6 md:w-7 md:h-7" />,
    <Settings className="w-6 h-6 md:w-7 md:h-7" />,
    <BarChart3 className="w-6 h-6 md:w-7 md:h-7" />
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
            Why Choose Capabiliq for RPO?
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            Experience recruitment process outsourcing redefined with AI-powered efficiency, global talent access, and transparent pricing models.
          </p>
        </div>

        {/* Benefits Grid Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#CEA6E8]">
          {/* Background Image - Increased width */}
          <div 
            className="absolute inset-0 object-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cardbg})` }}
          />
          
          {/* Content */}
          <div className="relative z-10 w-full">
            {/* Top Row - 3 Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {reasons.slice(0, 3).map((reason, index) => (
                <div 
                  key={index}
                  className={`p-6 md:p-8 flex flex-col border-b items-center text-center space-y-2 md:border-r border-[#CEA6E8] md:min-h-60 bg-transparent ${
                    index === 2 ? 'md:border-r-0' : ''
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#CEA6E8' }}>
                    <div className="text-black">
                      {icons[index]}
                    </div>
                  </div>
                  <div className="space-y-3 bg-transparent">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 bg-transparent" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed bg-transparent">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Row - 3 Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3">
              {reasons.slice(3, 6).map((reason, index) => (
                <div 
                  key={index + 3}
                  className={`p-6 md:p-8 flex flex-col items-center text-center space-y-4 md:border-r border-[#CEA6E8] md:min-h-60 bg-transparent ${
                    index === 2 ? 'md:border-r-0' : (index < 2 ? 'border-b md:border-b-0' : '')
                  }`}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center " style={{ backgroundColor: '#CEA6E8' }}>
                    <div className="text-black">
                      {icons[index + 3]}
                    </div>
                  </div>
                  <div className="space-y-3 bg-transparent">
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 bg-transparent" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                      {reason.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed bg-transparent">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}