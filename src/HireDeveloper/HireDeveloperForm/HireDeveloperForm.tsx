import React, { useState, useRef, useEffect } from 'react';
import { Star, Search, ChevronDown } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import emailjs from '@emailjs/browser';
import herosection from "../../assets/hero sections.jpg";
import heroformobile from "../../assets/Hoeroformobile.jpg";

// Initialize EmailJS
const EMAILJS_SERVICE_ID = 'service_yjhifms';
const EMAILJS_TEMPLATE_ID = 'template_77mcy89';
const EMAILJS_PUBLIC_KEY = 'j2K5cicD1E4lmkOQs';

// Country flag component (using emoji flags)
const CountryFlag = ({ countryCode }: { countryCode: string }) => {
  const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  return <span className="text-lg">{getFlagEmoji(countryCode)}</span>;
};

const HireDeveloperForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: 'IN',
    phone: '',
    hireType: ''
  });

  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const countries = getCountries();

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (countryCode: string) => {
    setFormData(prev => ({
      ...prev,
      countryCode
    }));
    setIsCountryDropdownOpen(false);
    setSearchQuery('');
  };

  const filteredCountries = countries.filter(country => {
    const callingCode = getCountryCallingCode(country);
    return callingCode.includes(searchQuery);
  });

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
  
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone || !formData.hireType) {
      toast.error('Please fill in all required fields!', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address!', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setIsSubmitting(true);

    // Show sending email toast
    const sendingToast = toast.info('📧 Sending your request...', {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: false,
    });

    // Prepare template parameters for EmailJS
    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: `+${getCountryCallingCode(formData.countryCode as any)} ${formData.phone}`,
      hireType: formData.hireType === 'contract' ? 'Contract' : 'Full Time',
      formType: 'Hire Developer Request',
      timestamp: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      subject: `Hire Developer Request from ${formData.name}`,
      reply_to: formData.email
    };

    // Debug log
    console.log('Sending template params:', templateParams);
  
    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Dismiss the sending toast
      toast.dismiss(sendingToast);

      console.log('EmailJS Response:', response);

      if (response.status === 200 || response.text === 'OK') {
        // Success toast
        toast.success('Your request has been submitted successfully! We will contact you soon.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    
        // Reset form
        setFormData({
          name: "",
          email: "",
          countryCode: "IN",
          phone: "",
          hireType: "",
        });
      } else {
        throw new Error(`Email sending failed with status: ${response.status}`);
      }
  
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      // Dismiss the sending toast if it's still showing
      toast.dismiss(sendingToast);
      
      // More specific error handling
      let errorMessage = '❌ Failed to submit. Please try again.';
      
      if (error instanceof Error) {
        if (error.message.includes('Service not found')) {
          errorMessage = '❌ Email service not configured properly.';
        } else if (error.message.includes('Template not found')) {
          errorMessage = '❌ Email template not found.';
        } else if (error.message.includes('Invalid public key')) {
          errorMessage = '❌ Invalid email configuration.';
        }
      }
      
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-[80vh] relative">
      {/* Background Image */}
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
      
      {/* Toast Container */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      {/* Grid Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Section - Content */}
          <div className="text-center lg:text-left">
          <button className="inline-block bg-[#760060] text-white font-bold py-2 px-4  rounded-lg transition-colors hover:bg-[#600050]">
              Book A Call
            </button>
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold text-black mb-3 sm:mb-4 leading-tight">
              Hire the Best Developers<br /><span className="bg-gradient-to-b from-[#D24B8A] to-[#6D58D6] bg-clip-text text-transparent">
    Remote & Onsite
  </span><br />around the Globe
            </h1>

            {/* Description */}
            <p className="text-black text-base sm:text-lg mb-4 sm:mb-5 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We connect you to pre-vetted, skilled professionals through our AI-driven platform — making hiring faster, smarter, and completely hassle-free for your business.
            </p>

            {/* Rating Badges */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-4 sm:mb-5">
              {/* Google Rating */}
              <div className="flex items-center gap-2 bg-white backdrop-blur-sm px-3 py-2 rounded-full border border-black/20 w-fit mx-auto sm:mx-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-semibold text-black text-xs sm:text-sm">Google</span>
                <span className="font-semibold text-black text-xs sm:text-sm">|</span>
                <span className="font-semibold text-black text-xs sm:text-sm">4.9</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              </div>

              {/* Trustpilot Rating */}
              <div className="flex items-center gap-2 bg-white backdrop-blur-sm px-3 py-2 rounded-full border border-black/20 w-fit mx-auto sm:mx-0">
                <span className="font-semibold text-black text-xs sm:text-sm">Trustpilot</span>
                <span className="font-semibold text-black text-xs sm:text-sm">|</span>
                <span className="font-semibold text-black text-xs sm:text-sm">4.9</span>
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              </div>
            </div>
          </div>

          {/* Right Section - Form Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 w-full max-w-md lg:max-w-lg">
              <form onSubmit={handleSubmit}>
                {/* Sub Heading */}
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-2">
                  Hire Remote Developer
                </h2>
                <p className="text-black/80 text-base mb-4">
                  Hire the best in class with trust of capability
                </p>
                
                {/* Name Field */}
                <div className="mb-3 sm:mb-4">
                  <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Your Name"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="mb-3 sm:mb-4">
                  <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                    Email Id*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type Your Email Here"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                   {/* Company Name */}
                   <div className="mb-3 sm:mb-4">
                  <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                   Company Name*
                  </label>
                  <input
                    type="companyName"
                    name="companyName"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Type Your Email Here"
                    className="w-full px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Contact Number Field */}
                <div className="mb-3 sm:mb-4">
                  <label className="block text-gray-700 font-medium mb-1 text-sm sm:text-base">
                    Contact Number*
                  </label>
                  <div className="flex gap-2">
                    {/* Country Code Selector */}
                    <div className="relative w-28" ref={dropdownRef}>
                      <div
                        className={`flex items-center justify-between px-2 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm cursor-pointer bg-white ${
                          isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                        }`}
                        onClick={() => !isSubmitting && setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                      >
                        <div className="flex items-center gap-1">
                          <CountryFlag countryCode={formData.countryCode} />
                          <span className="text-xs">+{getCountryCallingCode(formData.countryCode as any)}</span>
                        </div>
                        <ChevronDown className="w-3 h-3 text-gray-500" />
                      </div>

                      {isCountryDropdownOpen && !isSubmitting && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-10 max-h-48 overflow-y-auto">
                          {/* Search Input */}
                          <div className="p-2 border-b border-gray-200">
                            <div className="relative">
                              <Search className="w-3 h-3 absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              <input
                                type="text"
                                placeholder="Search country code..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-7 pr-2 py-1.5 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-purple-500 text-xs"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                          </div>

                          {/* Country List */}
                          <div className="max-h-32 overflow-y-auto">
                            {filteredCountries.map(country => (
                              <div
                                key={country}
                                className="flex items-center gap-2 px-2 py-1.5 hover:bg-purple-50 cursor-pointer text-xs"
                                onClick={() => handleCountrySelect(country)}
                              >
                                <CountryFlag countryCode={country} />
                                <span>+{getCountryCallingCode(country)}</span>
                              </div>
                            ))}
                            {filteredCountries.length === 0 && (
                              <div className="px-2 py-1.5 text-xs text-gray-500 text-center">
                                No countries found
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Phone number"
                      className="flex-1 px-3 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Type of Hire Field */}
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
                    Type Of Hire*
                  </label>
                  <div className="flex gap-3 justify-center sm:justify-start">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hireType"
                        value="contract"
                        checked={formData.hireType === 'contract'}
                        onChange={handleInputChange}
                        className="w-3 h-3 text-purple-600 focus:ring-purple-500"
                        disabled={isSubmitting}
                      />
                      <span className="ml-1.5 text-gray-700 text-sm">Contract</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="hireType"
                        value="fullTime"
                        checked={formData.hireType === 'fullTime'}
                        onChange={handleInputChange}
                        className="w-3 h-3 text-purple-600 focus:ring-purple-500"
                        disabled={isSubmitting}
                      />
                      <span className="ml-1.5 text-gray-700 text-sm">Full Time</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2.5 rounded-lg text-white font-semibold text-sm sm:text-base transition-all duration-200 hover:shadow-lg ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-lg'
                  }`}
                  style={{ backgroundColor: '#760060' }}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span className="text-sm">Sending...</span>
                    </div>
                  ) : (
                    "Hire Developer"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HireDeveloperForm;