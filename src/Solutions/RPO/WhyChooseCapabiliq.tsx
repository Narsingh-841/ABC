interface Reason {
  number: string;
  title: string;
  description: string;
}

export default function WhyChooseCapabiliq() {
  const reasons: Reason[] = [
    {
      number: '01',
      title: 'AI-Driven Hiring Process',
      description: 'Capabiliq\'s AI-enabled workflows automate screening, scheduling, and interviews—reducing manual effort and enabling faster, unbiased shortlisting at scale.'
    },
    {
      number: '02',
      title: 'Global Talent Access',
      description: 'With access to a large pool of vetted engineers, and professionals across levels and regions, Capabiliq ensures you never run short of high-quality talent.'
    },
    {
      number: '03',
      title: 'Lower Cost per Hire',
      description: 'Our RPO model offers fixed, transparent pricing—no hidden markups or inflated commissions, just predictable hiring costs aligned with outcomes.'
    },
    {
      number: '04',
      title: 'Faster Hiring, Less Downtime',
      description: 'Capabiliq reduces time-to-hire significantly with AI interviews, structured evaluations, and ready talent pipelines—helping your teams scale faster.'
    },
    {
      number: '05',
      title: 'Fully Customizable RPO Models',
      description: 'Every hiring requirement is unique. Capabiliq offers flexible RPO models—from full-cycle hiring to modular support—tailored to your needs.'
    },
    {
      number: '06',
      title: 'Real-Time Visibility & Reporting',
      description: 'Monitor every stage of your hiring process with live dashboards, weekly updates, and transparent scorecards for pipeline health and fulfillment metrics.'
    }
  ];

  return (
    <div className="bg-gray-50 py-8 px-4 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center mb-8 sm:mb-10 lg:mb-12 text-gray-900 px-4">
          Why Choose Capabiliq for RPO?
        </h2>

        {/* Grid Container */}
        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden mx-2 sm:mx-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`p-6 sm:p-7 lg:p-8 ${
                  // Mobile: border bottom for all except last
                  index < reasons.length - 1 ? 'border-b border-gray-200' : ''
                } ${
                  // Tablet: border right for first 4 items (2x2 grid)
                  (index < 4 && (index + 1) % 2 !== 0) ? 'sm:border-r border-gray-200' : ''
                } ${
                  // Desktop: border right for first 5 items (3x2 grid)
                  (index < 5 && (index + 1) % 3 !== 0) ? 'lg:border-r border-gray-200' : ''
                } ${
                  // Tablet: border bottom for first 4 items
                  index < 4 ? 'sm:border-b border-gray-200' : ''
                }`}
              >
                {/* Number Badge */}
                <div className="inline-block mb-4 sm:mb-5 lg:mb-6">
                  <div 
                    className="rounded-xl sm:rounded-2xl px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 shadow-md"
                    style={{ backgroundColor: '#E9D5F5' }}
                  >
                    <span className="text-xl sm:text-2xl font-bold" style={{ color: '#760060' }}>
                      {reason.number}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 leading-tight">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed sm:leading-loose">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}