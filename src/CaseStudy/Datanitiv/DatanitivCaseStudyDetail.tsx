import React from 'react';

interface NavItem {
  id: string;
  label: string;
}

const DatanitivCaseStudyDetail: React.FC = () => {
  const navItems: NavItem[] = [
    { id: 'challenge', label: 'Challenge' },
    { id: 'approach', label: 'Our Approach' },
    { id: 'outcome', label: 'Outcome' },
    { id: 'result', label: 'Result' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1">
            {/* Navigation Box */}
            <div className="rounded-3xl p-6 text-white mb-6 sticky top-8" style={{ backgroundColor: '#760060' }}>
              <h3 
                className="text-xl sm:text-2xl font-semibold mb-4"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                In this Casestudy
              </h3>
              
              {/* Navigation Items */}
              <nav className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block text-sm sm:text-base font-medium text-white/90 hover:text-white transition-colors duration-300 cursor-pointer"
                    style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTA Button */}
            <button 
              className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
            >
              Schedule A Call Now
            </button>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Challenge Section */}
            <div id="challenge">
              <h2 
                className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                Challenge:
              </h2>
              <p 
                className="text-base sm:text-lg text-gray-700 leading-relaxed"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                AI-driven startups with no India footprint required a scalable foundation to build specialized AI and data science teams.
              </p>
            </div>

            {/* Approach Section */}
            <div id="approach">
              <h2 
                className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                Our Approach:
              </h2>
              <ul className="space-y-2">
                {[
                  'Provided end-to-end India setup advisory — from entity formation to workspace readiness.',
                  'Built core AI and data science teams aligned with product development needs.',
                  'Established local compliance, HR, and operational frameworks.'
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <span className="text-base font-bold flex-shrink-0 mt-1" style={{ color: '#760060' }}>•</span>
                    <span 
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Outcome Section */}
            <div id="outcome">
              <h2 
                className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-3"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                Outcome:
              </h2>
              <ul className="space-y-2">
                {[
                  '50–200+ hires across AI/ML and engineering roles.',
                  'Seamless operational launch within 45 days.',
                  'Achieved 50% reduction in overall setup and talent acquisition cost.'
                ].map((item, index) => (
                  <li key={index} className="flex gap-2 items-start">
                    <span className="text-base font-bold flex-shrink-0 mt-1" style={{ color: '#760060' }}>•</span>
                    <span 
                      className="text-base sm:text-lg text-gray-700 leading-relaxed"
                      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result Section */}
            <div id="result" className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
              <h2 
                className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                Result:
              </h2>
              <p 
                className="text-lg sm:text-xl font-semibold text-gray-900 leading-relaxed"
                style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif' }}
              >
                India became their global innovation hub — powered by Capabiliq's execution network.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Add SF Pro font styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600;700&display=swap');
      `}</style>
    </section>
  );
};

export default DatanitivCaseStudyDetail;