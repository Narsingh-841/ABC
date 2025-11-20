// Placeholder image - replace with your actual import
import startUpChoose from '../../assets/startUpChoose.png';
export default function WhyStartupsChoose() {
  const benefits = [
    {
      number: '01',
      title: 'Flat 5% recruitment fee across all experience levels'
    },
    {
      number: '02', 
      title: 'First 5 background verifications free'
    },
    {
      number: '03',
      title: 'Pay once, hire unlimited within engagement period'
    },
    {
      number: '04',
      title: 'End-to-end hiring, from sourcing to onboarding'
    },
    {
      number: '05',
      title: 'Faster turnaround, quality profiles delivered in days, not weeks'
    }
  ];

  return (
    <section className="py-8 md:py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
            Why Startups Choose Capabiliq
          </h2>
          <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
            We understand the hustle — limited budgets, tight timelines, and ambitious goals. Our 5% recruitment model keeps things simple, scalable, and startup-friendly.
          </p>
        </div>

        {/* Benefits Grid Container */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-200">
          {/* Top Row - 3 Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-gray-300">
            {/* Benefit 01 */}
            <div className="p-6 md:p-8 flex flex-col border-b items-center text-center space-y-4 border-r border-gray-300 md:min-h-60">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#760060' }}>
                <span className="text-white text-xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[0].number}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                {benefits[0].title}
              </h3>
            </div>

            {/* Benefit 02 */}
            <div className="p-6 md:p-8 flex flex-col items-center text-center space-y-4 border-b md:border-b-0 border-r border-gray-300 md:min-h-60">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#760060' }}>
                <span className="text-white text-xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[1].number}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                {benefits[1].title}
              </h3>
            </div>

            {/* Benefit 03 */}
            <div className="p-6 md:p-8 flex flex-col border-b border-gray-300 items-center text-center space-y-4 md:min-h-60">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#760060' }}>
                <span className="text-white text-xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[2].number}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                {benefits[2].title}
              </h3>
            </div>
          </div>

          {/* Bottom Row - Image + 2 Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3">
            {/* Benefit 04 */}
            <div className="p-6 md:p-8 flex flex-col border-b items-center text-center space-y-4 border-r border-gray-300 md:min-h-60 justify-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#760060' }}>
                <span className="text-white text-xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[3].number}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                {benefits[3].title}
              </h3>
            </div>

            {/* Center Image - Hidden on mobile, visible on md and up */}
            <div className="hidden md:flex p-4 md:p-6 -mt-18 border-b items-center justify-center border-r border-gray-300 md:min-h-60">
              <div className="relative w-full max-w-xs">
                <img 
                  src={startUpChoose} 
                  alt="Startup Hiring Benefits" 
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/* Benefit 05 */}
            <div className="p-6 md:p-8 flex flex-col border-b border-gray-300 items-center text-center space-y-4 md:min-h-60 justify-center">
              <div className="w-14 h-14 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: '#760060' }}>
                <span className="text-white text-xl font-bold" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                  {benefits[4].number}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "San Francisco", sans-serif' }}>
                {benefits[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}