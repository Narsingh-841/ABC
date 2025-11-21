import { useNavigate } from "react-router-dom";
import herosection from "../../assets/hero sections.jpg"; // Import the background image
import heroformobile from "../../assets/Hoeroformobile.jpg"; // Import the mobile background image

export default function AIDataAnalyticsSection() {
  const navigate = useNavigate();

  const handleBookCall = () => {
    navigate('/contact-us');
  };
  
  return (
    <section className="relative min-h-[60vh] overflow-hidden py-24 px-4 sm:px-6 lg:px-8 flex items-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      {/* Background Images - Different for mobile and desktop */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Background */}
        <img
          src={herosection}
          alt="Background"
          className="hidden lg:block w-full h-full object-cover"
        />
        {/* Mobile Background */}
        <img
          src={heroformobile}
          alt="Mobile Background"
          className="block lg:hidden w-full h-full object-cover"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Service Badge */}
        <div className="inline-block bg-[#760060]  text-white font-semibold py-2 px-6 rounded-full mb-8 transition-colors">
          Our Services
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-black mb-8 leading-tight">
          AI & Data Analytics
        </h1>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed mb-12 max-w-3xl mx-auto">
          At CAPABILIQ, we bring together highly skilled professionals in AI and Data Analytics to deliver tailor-made technology solutions. Our expertise ensures that your business doesn't just adopt technology - it thrives with it.
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