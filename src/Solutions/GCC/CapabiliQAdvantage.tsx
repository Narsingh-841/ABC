import { Check } from 'lucide-react';
import capAdv from '../../assets/capAdv.png';

export default function CapabiliQAdvantage() {
  const advantages = [
    'End-to-end GCC setup – from advisory to operations',
    'Access to Tier-1 talent and digital expertise',
    'Regulatory and tax compliance management',
    'Proven cost savings and operational excellence',
    'Industry expertise across BFSI, Tech, Manufacturing, and Retail'
  ];

  return (
    <section className="bg-white py-12 md:py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-12 md:mb-16" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
          The CapabiliQ Advantage
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Subheading */}
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
              Why global enterprises trust CapabiliQ for GCC setup in India
            </h3>

            {/* Advantages List */}
            <div className="space-y-3">
              {advantages.map((advantage, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-500">
                      <Check size={14} className="text-white font-bold" />
                    </div>
                  </div>
                  <span className="text-gray-800 text-sm md:text-base font-medium">{advantage}</span>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed pt-2">
              We don't just help you set up a GCC - we help you build an innovation powerhouse.
            </p>

            {/* CTA Button */}
            <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-medium py-2.5 px-6 rounded-full transition-all duration-300 transform hover:scale-105 w-fit text-sm md:text-base">
              Book a Consulting Call
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-80 md:h-96 flex items-center justify-center">
            {/* Image Container */}
            <div className="relative w-full h-full">
              {/* Actual imported image */}
              <img 
                src={capAdv} 
                alt="CapabiliQ Advantage"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />

              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-16 h-16 bg-purple-300 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-3 -left-3 w-24 h-24 bg-pink-300 rounded-full opacity-20 blur-2xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}