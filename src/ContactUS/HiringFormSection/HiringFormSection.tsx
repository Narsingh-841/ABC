import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HiringFormSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    hiringNeeds: '',
    employees: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-gradient-to-r mt-12 from-purple-100 via-pink-100 to-purple-100 py-12 px-4 sm:px-6 lg:px-8 flex items-center" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }}>
      <div className="max-w-7xl mx-auto w-full">
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
                <span className="text-xl">🔍</span>
                <span className="font-semibold text-gray-800">Google</span>
                <span className="text-yellow-500 font-bold">4.9 ⭐</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-xl">⭐</span>
                <span className="font-semibold text-gray-800">Trustpilot</span>
                <span className="text-yellow-500 font-bold">4.9 ⭐</span>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
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
                  />
                </div>
              </div>

              {/* Company Website & Contact Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Company website<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Ex. Sourcebae.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Contact number
                  </label>
                  <div className="flex gap-2">
                    <div className="flex items-center px-2 py-3 border border-gray-200 rounded-lg bg-gray-50 whitespace-nowrap">
                      <span className="text-lg mr-1">🇮🇳</span>
                      <span className="text-gray-700 font-semibold text-sm">+91</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="10 digits"
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 placeholder-gray-400 text-sm"
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
                    <select
                      name="hiringNeeds"
                      value={formData.hiringNeeds}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 appearance-none bg-white text-gray-500 cursor-pointer"
                    >
                      <option value="">Select...</option>
                      <option value="developers">Developers</option>
                      <option value="designers">Designers</option>
                      <option value="managers">Managers</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
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
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-lg"
              >
                Submit & Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}