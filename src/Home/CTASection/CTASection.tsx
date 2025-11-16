import ladyonlaptop from '../../assets/ladyonlaptop.png';

const CTASection = () => {
  return (
    <section className="py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#d3e9fd] rounded-2xl sm:rounded-3xl border-2 sm:border-3 lg:border-4 border-blue-400 p-4 sm:p-5 lg:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 xl:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center order-2 lg:order-1">
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4 leading-tight">
                Ready to Build Your Tech team?
              </h2>
              
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4 lg:mb-5 leading-relaxed">
                Start with a quick discovery call and hire the right developers for your project. With Capabiliq, you get access to top vetted talent - ready to join your team fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-4 lg:mb-5">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-3 sm:py-2.5 sm:px-5 lg:py-3 lg:px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-xs sm:text-sm lg:text-base">
                  Book a Consulting Call
                </button>
              </div>

              {/* Rating Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg shadow-md border border-blue-200 text-xs">
                  <span className="text-base sm:text-lg">🔍</span>
                  <span className="font-semibold text-gray-800">Google</span>
                  <span className="text-yellow-500 font-bold">4.9 ⭐</span>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg shadow-md border border-blue-200 text-xs">
                  <span className="text-base sm:text-lg">⭐</span>
                  <span className="font-semibold text-gray-800">Trustpilot</span>
                  <span className="text-yellow-500 font-bold">4.9 ⭐</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex flex-col items-center order-1 lg:order-2 mb-2 lg:mb-0">
              <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-40 sm:h-52 lg:h-64 xl:h-72 bg-[#d3e9fd] flex items-center justify-center overflow-hidden">
                <img 
                  src={ladyonlaptop} 
                  alt="Professional woman working on laptop" 
                  className="w-full h-full object-contain scale-90 sm:scale-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;