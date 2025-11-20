import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCountries, getCountryCallingCode } from 'react-phone-number-input';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
const EMAILJS_SERVICE_ID = 'service_yjhifms';
const EMAILJS_TEMPLATE_ID = 'template_986tjhq';
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

export default function HiringFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    countryCode: 'IN',
    phone: '',
    hiringNeeds: '',
    employees: ''
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
    if (!formData.fullName || !formData.email || !formData.company || !formData.hiringNeeds || !formData.employees) {
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

    // Prepare template parameters for EmailJS - MATCHING TEMPLATE VARIABLES
    const templateParams = {
      fullName: formData.fullName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone ? `+${getCountryCallingCode(formData.countryCode as any)} ${formData.phone}` : 'Not provided',
      hiringNeeds: formData.hiringNeeds,
      employees: formData.employees,
      timestamp: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      subject: `Hiring Form Request from ${formData.fullName}`,
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
          fullName: '',
          email: '',
          company: '',
          countryCode: 'IN',
          phone: '',
          hiringNeeds: '',
          employees: ''
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
    <section className="bg-gradient-to-r from-purple-100 via-pink-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
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
      
      <div className="max-w-8xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-gray-900">
            <button className="inline-block bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-6 rounded-lg mb-8 transition-colors">
              Book A Call
            </button>

            <h1 className="text-5xl lg:text-6xl font-semibold mb-8 leading-tight">
              Experience how Capabiliq makes hiring faster, easier, and more accurate
            </h1>

            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              See how Capabiliq simplifies hiring — faster, leaner, and always on point. Complete staffing, handled for you.
            </p>

            {/* Rating Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md border border-gray-200">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-semibold text-gray-800">Google</span>
                <span className="text-gray-800  font-bold">4.9 ⭐</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md border border-gray-200">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="#00B67A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span className="font-semibold text-gray-800">Trustpilot</span>
                <span className="text-gray-800 font-bold">4.9 ⭐</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Full Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Full name<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Email address<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Company Website & Contact Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company Website */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Company website<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Ex. capabiliq.com"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  
                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Contact number
                    </label>
                    <div className="flex gap-3">
                      {/* Country Code Selector */}
                      <div className="relative flex-shrink-0" ref={dropdownRef}>
                        <button
                          type="button"
                          disabled={isSubmitting}
                          onClick={() => !isSubmitting && setIsCountryDropdownOpen(prev => !prev)}
                          className="flex items-center justify-between px-3 py-3 bg-gray-50 border border-gray-200 rounded-lg hover:border-gray-300 disabled:opacity-50 transition-colors min-w-[100px]"
                        >
                          <div className="flex items-center gap-2">
                            <CountryFlag countryCode={formData.countryCode} />
                            <span className="font-semibold text-gray-800 text-sm">
                              +{getCountryCallingCode(formData.countryCode as any)}
                            </span>
                          </div>
                          <ChevronDown className={`w-4 h-4 ml-1 text-gray-500 transition-transform ${isCountryDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown */}
                        {isCountryDropdownOpen && !isSubmitting && (
                          <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-2xl z-50 w-72 max-w-[calc(100vw-2rem)]">
                            {/* Search */}
                            <div className="p-3 border-b border-gray-100">
                              <div className="relative">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                <input
                                  type="text"
                                  placeholder="Search country..."
                                  value={searchQuery}
                                  onChange={(e) => setSearchQuery(e.target.value)}
                                  className="w-full pl-9 pr-3 py-2 text-sm bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                  onClick={(e) => e.stopPropagation()}
                                  autoFocus
                                />
                              </div>
                            </div>

                            {/* Country List */}
                            <div className="max-h-60 overflow-y-auto">
                              {filteredCountries.map(country => (
                                <button
                                  key={country}
                                  type="button"
                                  onClick={() => handleCountrySelect(country)}
                                  className="w-full flex items-center gap-3 px-4 py-3 hover:bg-purple-50 text-left transition-colors"
                                >
                                  <CountryFlag countryCode={country} />
                                  <div className="flex-1 min-w-0">
                                    <span className="font-medium text-gray-800 text-sm">+{getCountryCallingCode(country)}</span>
                                    <span className="text-gray-500 text-xs ml-2">{country}</span>
                                  </div>
                                </button>
                              ))}
                              {filteredCountries.length === 0 && (
                                <p className="px-4 py-6 text-center text-gray-500 text-sm">No countries found</p>
                              )}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Phone Number Input */}
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className="flex-1 min-w-0 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                {/* Hiring Needs & Employees */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Your hiring needs<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        name="hiringNeeds"
                        value={formData.hiringNeeds}
                        onChange={handleChange}
                        placeholder="Describe your hiring needs"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 appearance-none bg-white text-gray-500 cursor-pointer"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-900 mb-2">
                      Employees at your company<span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        name="employees"
                        value={formData.employees}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 appearance-none bg-white text-gray-500 cursor-pointer"
                        required
                        disabled={isSubmitting}
                      >
                        <option value="">Select...</option>
                        <option value="1-10">1-10</option>
                        <option value="11-50">11-50</option>
                        <option value="51-200">51-200</option>
                        <option value="200+">200+</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 shadow-lg text-lg ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:from-pink-600 hover:to-purple-700 transform hover:scale-105'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    "Submit & Continue"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}