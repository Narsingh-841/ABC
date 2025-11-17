import React, { useState } from 'react';
import { Star } from 'lucide-react';

const HireDeveloperForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+91',
    phone: '',
    hireType: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-0 bg-gradient-to-br mt-12 sm:mt-16 lg:mt-18 from-purple-50 via-pink-50 to-purple-100 flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-10 lg:py-12 gap-8 lg:gap-12">
      {/* Left Section */}
      <div className="flex-1 max-w-2xl w-full lg:w-auto text-center lg:text-left">
        {/* Book A Call Button */}
        <button 
          className="mb-6 lg:mb-8 px-5 py-2.5 sm:px-6 sm:py-2.5 rounded-full text-white font-medium text-sm transition-all duration-200 hover:shadow-lg"
          style={{ backgroundColor: '#760060' }}
        >
          Book A Call
        </button>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 mb-4 sm:mb-6 leading-tight">
          Hire the Best Developers<br />around the Globe
        </h1>

        {/* Description */}
        <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
          We connect you to pre-vetted, skilled professionals through our AI-driven platform — making hiring faster, smarter, and completely hassle-free for your business.
        </p>

        {/* Rating Badges */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
          {/* Google Rating */}
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-gray-200 w-fit mx-auto sm:mx-0">
            <svg viewBox="0 0 24 24" className="w-5 h-5 sm:w-6 sm:h-6">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">4.9</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          </div>

          {/* Trustpilot Rating */}
          <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-sm border border-gray-200 w-fit mx-auto sm:mx-0">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-green-500 text-green-500" />
            <span className="font-semibold text-gray-900 text-sm sm:text-base">Trustpilot</span>
            <span className="font-semibold text-gray-900 text-sm sm:text-base">4.9</span>
            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          </div>
        </div>
      </div>

      {/* Right Section - Form Card */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 w-full max-w-md lg:max-w-lg">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Hire Remote Developer
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-6">
          Hire the best in class with trust of capabiliq
        </p>

        <div>
          {/* Name Field */}
          <div className="mb-4 sm:mb-5">
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Name*
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4 sm:mb-5">
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Email-id*
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Type Your Email Here"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
              required
            />
          </div>

          {/* Contact Number Field */}
          <div className="mb-4 sm:mb-5">
            <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
              Contact Number*
            </label>
            <div className="flex gap-2">
              <select
                name="countryCode"
                value={formData.countryCode}
                onChange={(e) => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                className="px-3 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base w-20"
              >
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
                <option value="+61">🇦🇺 +61</option>
              </select>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone number"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm sm:text-base"
                required
              />
            </div>
          </div>

          {/* Type of Hire Field */}
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-3 text-sm sm:text-base">
              Type Of Hire*
            </label>
            <div className="flex gap-4 justify-center sm:justify-start">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="hireType"
                  value="contract"
                  checked={formData.hireType === 'contract'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700 text-sm sm:text-base">Contract</span>
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="hireType"
                  value="fullTime"
                  checked={formData.hireType === 'fullTime'}
                  onChange={handleInputChange}
                  className="w-4 h-4 text-purple-600 focus:ring-purple-500"
                />
                <span className="ml-2 text-gray-700 text-sm sm:text-base">Full Time</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 sm:py-3.5 rounded-lg text-white font-semibold text-base sm:text-lg transition-all duration-200 hover:shadow-lg"
            style={{ backgroundColor: '#760060' }}
          >
            Hire Developer
          </button>
        </div>
      </div>
    </div>
  );
};

export default HireDeveloperForm;