// Placeholder image - replace with your actual import
import startUpChoose from '../../assets/startUpChoose.png';
import { DollarSign, ShieldCheck, Infinity, Users, Clock } from 'lucide-react';
import cardbg from "../../assets/cardbg.png"

export default function WhyStartupsChoose() {
  const benefits = [
    {
      icon: <DollarSign className="w-6 h-6 md:w-7 md:h-7" />,
      title: 'Flat 5% recruitment fee across all experience levels'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 md:w-7 md:h-7" />,
      title: 'First 5 background verifications free'
    },
    {
      icon: <Infinity className="w-6 h-6 md:w-7 md:h-7" />,
      title: 'Pay once, hire unlimited within engagement period'
    },
    {
      icon: <Users className="w-6 h-6 md:w-7 md:h-7" />,
      title: 'End-to-end hiring, from sourcing to onboarding'
    },
    {
      icon: <Clock className="w-6 h-6 md:w-7 md:h-7" />,
      title: 'Faster turnaround, quality profiles delivered in days, not weeks'
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-8 overflow-hidden w-full">
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12 px-2 ">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
            Why Startups Choose Capabiliq
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We understand the hustle — limited budgets, tight timelines, and ambitious goals. Our 5% recruitment model keeps things simple, scalable, and startup-friendly.
          </p>
        </div>

        {/* Benefits Grid Container */}
        <div className="relative rounded-3xl overflow-hidden border border-gray-200 w-full">

          {/* Background Image - Increased width */}
          <div 
            className="absolute inset-0 object-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cardbg})` }}
          />

          {/* Content */}
          <div className="relative z-10 w-full ">
            {/* Top Row - 3 Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
              {/* Benefit 1 */}
              <div className="p-6 md:p-8 flex flex-col border-b border-[#CEA6E8] items-center text-center space-y-4 md:border-r border-[#CEA6E8] md:min-h-60">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#CEA6E8' }}>
                  <div className="text-black">
                    {benefits[0].icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[0].title}
                </h3>
              </div>

              {/* Benefit 2 */}
              <div className="p-6 md:p-8 flex flex-col border-b border-[#CEA6E8] items-center text-center space-y-4 md:border-r border-[#CEA6E8] md:border-b-0 md:min-h-60">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#CEA6E8' }}>
                  <div className="text-black">
                    {benefits[1].icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[1].title}
                </h3>
              </div>

              {/* Benefit 3 */}
              <div className="p-6 md:p-8 flex flex-col border-b border-[#CEA6E8] items-center text-center space-y-4 md:border-b md:min-h-60">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#CEA6E8' }}>
                  <div className="text-black">
                    {benefits[2].icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[2].title}
                </h3>
              </div>
            </div>

            {/* Bottom Row - Image + 2 Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 w-full">
              {/* Benefit 4 */}
              <div className="p-6 md:p-8 flex flex-col border-b border-[#CEA6E8] items-center text-center space-y-4 md:border-r border-[#CEA6E8] md:border-b-0 md:min-h-60 justify-center">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#CEA6E8' }}>
                  <div className="text-black">
                    {benefits[3].icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[3].title}
                </h3>
              </div>

              {/* Center Image - Hidden on mobile, visible on md and up */}
              <div className="hidden md:flex p-4 md:p-6 -mt-18 items-center justify-center md:border-r border-[#CEA6E8] md:min-h-60">
                <div className="relative w-full max-w-xs">
                  <img 
                    src={startUpChoose} 
                    alt="Startup Hiring Benefits" 
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>

              {/* Benefit 5 */}
              <div className="p-6 md:p-8 flex flex-col border-b border-[#CEA6E8] md:border-b-0 items-center text-center space-y-4 md:min-h-60 justify-center">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#CEA6E8' }}>
                  <div className="text-black">
                    {benefits[4].icon}
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[4].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}