import { Check } from 'lucide-react';
import CAPADVRPO from '../../assets/CAPADVRPO.png'

export default function CapabiliqAdvantageRpo() {
  const benefits = [
    'Startups & Unicorns scaling engineering, product, and GTM teams',
    'GCCs & MNCs hiring tech, support, and operations at scale',
    'HR Teams with limited internal capacity or expertise',
    'Remote-First Companies building distributed teams',
    'Enterprises reducing cost-per-hire and speeding up hiring cycles'
  ];

  return (
    <div className="bg-white py-8 px-4 font-['SF_Pro_Display']">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8 text-gray-900">
          The Capabiliq Advantage
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src={CAPADVRPO} 
              alt="Capabiliq Team" 
              className="w-full rounded-3xl shadow-lg object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900">
              Who Should Use Capabiliq RPO?
            </h3>

            {/* Benefits List */}
            <div className="space-y-4 mb-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" strokeWidth={3} />
                    </div>
                  </div>
                  <p className="text-base text-gray-900 font-medium">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed mb-6">
              Our clients span tech, BFSI, healthcare, edtech, SaaS, and retail. Regardless of size or stage, Capabiliq integrates seamlessly into your hiring engine as a strategic partner.
            </p>

            {/* CTA Button */}
            <button 
              className="px-8 py-4 rounded-full text-white font-semibold text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(to right, #e85d9a, #a855f7)'
              }}
            >
              Book a Consulting Call
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}