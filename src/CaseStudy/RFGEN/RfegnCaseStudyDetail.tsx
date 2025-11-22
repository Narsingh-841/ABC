import React from 'react';

interface NavItem {
  id: string;
  label: string;
}

const RfgenCaseStudyDetail: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'approach', label: 'Capabiliq Approach' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'result', label: 'Result' }
  ];

  return (
    <section className="py-6 sm:py-10 md:py-14 lg:py-12 px-3 sm:px-5 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-10">
  
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            <div
              className="
                rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 text-white mb-4 sm:mb-6
                lg:sticky lg:top-24
              "
              style={{ backgroundColor: "#760060" }}
            >
              <h3
                className="text-base sm:text-lg lg:text-xl font-semibold mb-3 sm:mb-4"
                style={{ fontFamily: "SF Pro Display" }}
              >
                In this Casestudy
              </h3>
  
              <nav className="space-y-1 sm:space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="
                      block text-xs sm:text-sm lg:text-base font-medium text-white/90 
                      hover:text-white transition-colors duration-300 cursor-pointer py-1
                    "
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
  
            <button
              className="
                w-full bg-gradient-to-r from-pink-500 to-purple-600
                hover:from-pink-600 hover:to-purple-700
                text-white font-semibold py-2.5 sm:py-3 lg:py-3.5
                rounded-lg sm:rounded-xl transition-all duration-300 
                hover:scale-[1.03] shadow-md text-xs sm:text-sm lg:text-base
              "
            >
              Schedule A Call Now
            </button>
          </div>
  
          {/* Right Content */}
          <div className="lg:col-span-3 space-y-6 sm:space-y-8">
  
            {/* Challenge */}
            <div id="challenge" className="scroll-mt-24">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Challenge:
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                A U.S.-based enterprise software company needed to establish an India GCC but lacked market insights, local presence, and talent strategy.
              </p>
            </div>
  
            {/* Approach */}
            <div id="approach" className="scroll-mt-24">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Capabiliq Approach:
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Conducted end-to-end market research and feasibility study.',
                  'Designed organizational structure and hiring roadmap.',
                  'Executed rapid hiring sprint to fill critical engineering roles.'
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3 items-start">
                    <span
                      className="text-sm sm:text-base font-bold"
                      style={{ color: "#760060" }}
                    >
                      •
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Outcome */}
            <div id="outcome" className="scroll-mt-24">
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Outcome:
              </h2>
              <ul className="space-y-2 sm:space-y-3">
                {[
                  'Closed 50+ niche technical positions in 3 weeks.',
                  'Set up a fully functional GCC with workspace and leadership.',
                  'Achieved 40% cost efficiency compared to traditional outsourcing.'
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 sm:gap-3 items-start">
                    <span
                      className="text-sm sm:text-base font-bold"
                      style={{ color: "#760060" }}
                    >
                      •
                    </span>
                    <span className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Result */}
            <div
              id="result"
              className="
                scroll-mt-24 bg-gradient-to-br from-blue-50 to-indigo-50
                rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 border border-blue-100
              "
            >
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3">
                Result:
              </h2>
              <p className="text-sm sm:text-base lg:text-xl font-semibold text-gray-900 leading-relaxed">
                From zero presence to a high performing GCC — built and scaled in record time.
              </p>
            </div>
          </div>
        </div>
      </div>
  
      {/* Smooth scroll */}
      <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
    </section>
  );
};

export default RfgenCaseStudyDetail;