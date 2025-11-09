const HeroSection = () => {
    return (
      <section className="relative min-h-[80vh] bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 pt-16 pb-32 text-center relative z-10">
          {/* LinkedIn Indian Startup Badge with falling animation */}
          <div className="flex items-center justify-center gap-2 mb-12 opacity-0 animate-fall-down delay-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0077B5" className="w-6 h-6">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-gray-800 font-medium text-base">Indian Startup</span>
          </div>
  
          {/* Main Heading with staggered falling animation */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900 opacity-0 animate-fall-down delay-400">
            AI-RaaS Platform to<br />
            Discover <span className="bg-gradient-to-r from-purple-500 via-purple-400 to-pink-500 bg-clip-text text-transparent">Exceptional</span> Professionals.
          </h1>
  
          {/* Subheading with falling animation */}
          <p className="text-gray-700 text-lg md:text-xl mb-10 font-normal max-w-2xl mx-auto opacity-0 animate-fall-down delay-600">
            We're the AI-powered staffing company designed to help you hire top-tier talent.
          </p>
  
          {/* CTA Button sliding from left */}
          <div className="flex justify-center mb-12">
            <button className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-600 text-white px-10 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-purple-300 opacity-0 animate-slide-in-left delay-800">
              Book a Consulting Call
            </button>
          </div>
  
          {/* Review Badges sliding from right */}
          <div className="flex items-center justify-center gap-6 flex-wrap opacity-0 animate-slide-in-right delay-1000">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-semibold text-gray-900">4.9</span>
              <span className="text-yellow-400 text-lg">★</span>
            </div>
            
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#00B67A">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span className="font-bold text-gray-900 text-sm">Trustpilot</span>
              <span className="font-semibold text-gray-900">4.9</span>
              <span className="text-yellow-400 text-lg">★</span>
            </div>
          </div>
        </div>
  
        {/* CSS U-shaped Gradient Background */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[180vw] h-[250vh] rounded-b-[70%]"
          style={{
            background: 'linear-gradient(180.13deg, #FFFFFF 77.63%, #D24B8A 99.89%)'
          }}
        ></div>
      </section>
    );
  };
  
  export default HeroSection;