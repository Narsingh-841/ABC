import { ArrowRight, Check,  } from 'lucide-react';
import GCC from '../../assets/gccpage.png';

export default function GccSection() {
  return (
    <section className="relative mt-18 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-100 overflow-hidden py-6 md:py-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Top Logo */}
        <div className="mb-4 md:mb-6">
          <div className="text-blue-600 font-bold text-xl inline-block">
            LinkedIn<span className="bg-blue-600 text-white px-1 rounded">in</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-block">
              <div className="border-2 border-gray-300 rounded-full px-5 py-2 text-gray-800 font-semibold text-sm">
                CapabiliQ Global Capability Center
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight text-gray-900">
              Build Your Innovation Engine for Global Growth
            </h1>

            {/* Description */}
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              At CapabiliQ, we help global enterprises set up, scale, and optimize Global Capability Centers (GCCs) in India and beyond.
            </p>

            {/* Feature with checkmark */}
            <div className="flex gap-3">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-5 w-5 rounded-full bg-green-400">
                  <Check size={14} className="text-white font-bold" />
                </div>
              </div>
              <p className="text-gray-800 text-sm md:text-base leading-relaxed">
                Our end-to-end GCC solutions combine strategy, talent, technology, and compliance — empowering organizations to accelerate global innovation and efficiency.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-sm">
                Talk to Our GCC Experts
                <ArrowRight size={18} />
              </button>
              <button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-2 px-5 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 w-full sm:w-auto text-sm">
                Download GCC Playbook
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Right Side - GCC Image */}
          <div className="relative flex items-center justify-center">
            <img 
              src={GCC} 
              alt="How it works illustration" 
              className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}