import ladyonlaptop from '../../assets/ladyonlaptop.png';


const CTASection = () => {
  return (
    <section className="bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#d3e9fd] rounded-3xl border-4 border-blue-400 p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Ready to Build Your Tech team?
              </h2>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Start with a quick discovery call and hire the right developers for your project. With Capabiliq, you get access to top vetted talent - ready to join your team fast.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Book a Consulting Call
                </button>
              </div>

              {/* Rating Badges */}
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md border border-blue-200">
                  <span className="text-xl">🔍</span>
                  <span className="font-semibold text-gray-800">Google</span>
                  <span className="text-yellow-500 font-bold">4.9 ⭐</span>
                </div>
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg shadow-md border border-blue-200">
                  <span className="text-xl">⭐</span>
                  <span className="font-semibold text-gray-800">Trustpilot</span>
                  <span className="text-yellow-500 font-bold">4.9 ⭐</span>
                </div>
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative flex flex-col items-center">
              <div className="w-full max-w-sm h-48 bg-gradient-to-br from-blue-300 to-blue-400 rounded-2xl flex items-center justify-center shadow-xl overflow-hidden">
                <img 
                  src={ladyonlaptop} 
                  alt="Professional woman working on laptop" 
                  className="w-full h-full object-cover"
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