import React, { useState } from 'react';
import RPOForm from '../../assets/RPOForm.png';

const RPOContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    companyEmail: '',
    jobTitle: '',
    consent: false
  });

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center sm:p-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}>
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Imported Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={RPOForm} 
                alt="RPO Playbook" 
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Ready to Build Your RPO in India?
            </h1>
            
            <p className="text-gray-500 text-lg mb-8">Fast-Track Your Set-Up Now</p>

            <div className="space-y-6">
              {/* Name Fields */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Name <span className="text-red-500 text-xs">(Required)</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                    />
                    <label className="text-xs text-gray-500 mt-1 block">First</label>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                    />
                    <label className="text-xs text-gray-500 mt-1 block">Last</label>
                  </div>
                </div>
              </div>

              {/* Company and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company <span className="text-red-500 text-xs">(Required)</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Email <span className="text-red-500 text-xs">(Required)</span>
                  </label>
                  <input
                    type="email"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>
              </div>

              {/* Job Title and Consent */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Title <span className="text-red-500 text-xs">(Required)</span>
                  </label>
                  <input
                    type="text"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleChange}
                    className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Consent <span className="text-red-500 text-xs">(Required)</span>
                  </label>
                  <div className="flex items-start gap-3 mt-3">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-600">
                      I consent to receive the GCC playbook from Dexian and to be contacted by Dexian's sales team.
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white font-medium py-4 px-12 rounded-full transition-colors duration-200 text-lg"
                >
                  Get Your Copy of Capabiliq's RPO Playbook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPOContactForm;