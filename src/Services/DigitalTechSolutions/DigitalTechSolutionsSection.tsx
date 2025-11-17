import { useNavigate } from "react-router-dom";

export default function DigitalTechSolutionsSection() {
  const navigate = useNavigate(); // Add this line

  const handleBookCall = () => {
    navigate('/contact-us');
  };
    return (
      <section className="relative bg-gradient-to-b from-gray-50 via-purple-100 to-pink-100 py-24 px-4 sm:px-6 lg:px-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center">
          {/* Service Badge */}
          <div className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-semibold py-2 px-6 rounded-full mb-8 transition-colors">
            Our Services
          </div>
  
          {/* Main Heading */}
          <h1 className="text-6xl lg:text-7xl font-semibold text-black mb-8 leading-tight">
            Digital Tech Solutions
          </h1>
  
          {/* Description */}
          <p className="text-lg lg:text-xl text-gray-800 leading-relaxed mb-12 max-w-3xl mx-auto">
            At CAPABILIQ, we craft bespoke digital technology solutions tailored to your unique business needs. Our expert team delivers cutting-edge applications, platforms, and systems that drive innovation, efficiency, and competitive advantage in the digital age.
          </p>
  
          {/* CTA Button */}
          <button 
          onClick={handleBookCall}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
        >
          Book a Consulting Call
        </button>
        </div>
      </section>
    );
  }