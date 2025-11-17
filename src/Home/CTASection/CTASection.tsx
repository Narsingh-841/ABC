import { useNavigate } from 'react-router-dom';
import ladyonlaptop from '../../assets/ladyonlaptop.png';
import { Star } from 'lucide-react';

const CTASection = () => {
  const navigate = useNavigate(); // Add this line

  const handleBookCall = () => {
    navigate('/contact-us');
  };
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
              <button 
          onClick={handleBookCall}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
        >
          Book a Consulting Call
        </button>
              </div>

              {/* Rating Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg shadow-md border border-blue-200 text-xs">
                  {/* Google Icon */}
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
                  <span className="font-semibold text-gray-800">Google</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-500 text-yellow-500" />
                    <span className="text-yellow-500 font-bold">4.9</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 sm:gap-2 bg-white px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-lg shadow-md border border-blue-200 text-xs">
                  {/* Trustpilot Icon */}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 text-green-600" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 1L15.09 8.26L23 9.27L17 14.14L18.18 22L12 18.27L5.82 22L7 14.14L1 9.27L8.91 8.26L12 1Z"/>
                  </svg>
                  <span className="font-semibold text-gray-800">Trustpilot</span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-500 text-yellow-500" />
                    <span className="text-yellow-500 font-bold">4.9</span>
                  </div>
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