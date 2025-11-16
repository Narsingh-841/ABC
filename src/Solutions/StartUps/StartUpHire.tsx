import { Check } from 'lucide-react';
import startup from '../../assets/startup.png';

export default function StartUpHire() {
  return (
    <section className="relative bg-gradient-to-b mt-18 from-blue-50 via-purple-50 to-pink-100 overflow-hidden py-6 md:py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 md:space-y-6">
            {/* LinkedIn Logo */}
            <div className="text-blue-600 font-bold text-lg md:text-xl">
              LinkedIn<span className="bg-blue-600 text-white px-1 rounded">in</span>
            </div>

            {/* Main Heading */}
            <div>
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold leading-tight text-gray-900 mb-3 md:mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                Build your dream team<br />
                with Capabiliq's startup-<br />
                first hiring model
              </h1>
              <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                Transparent pricing, zero hidden costs, and unmatched<br />
                speed. Because smart startups don't just hire — they hire<br />
                strategically and cost-effectively.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-1 md:space-y-2">
              {[
                'Flat 5% Recruitment',
                'Free BGV for First 5 Hires',
                'Pay Once. Hire Unlimited.'
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 md:gap-3">
                  <div className="flex-shrink-0 mt-0.5">
                    <div className="flex items-center justify-center h-4 w-4 md:h-5 md:w-5 rounded-full bg-green-400">
                      <Check size={12} className="text-white font-bold md:w-4 md:h-4" />
                    </div>
                  </div>
                  <span className="text-gray-800 text-xs md:text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 md:py-3 px-6 md:px-8 rounded-full transition-all duration-300 transform hover:scale-105 w-full sm:w-fit text-xs md:text-sm">
              Start Hiring Now
            </button>
          </div>

          {/* Right Side - Imported Image */}
          <div className="relative h-56 md:h-72 lg:h-80 flex items-center justify-center mt-2 md:mt-0">
            {/* Background shapes */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute w-40 h-40 md:w-56 md:h-56 bg-blue-400 rounded-full opacity-30 blur-2xl md:blur-3xl -top-8 -left-8"></div>
              <div className="absolute w-36 h-36 md:w-48 md:h-48 bg-purple-500 rounded-full opacity-40 blur-2xl md:blur-3xl -bottom-4 right-0"></div>
            </div>

            {/* Imported Image */}
            <div className="relative z-10 w-full h-full flex items-center justify-center">
              <img 
                src={startup} 
                alt="Startup Hiring" 
                className="w-full h-full object-contain max-w-xs sm:max-w-sm md:max-w-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}