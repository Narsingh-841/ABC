import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
const EMAILJS_SERVICE_ID = 'service_yjhifms';
const EMAILJS_TEMPLATE_ID = 'template_986tjhq';
const EMAILJS_PUBLIC_KEY = 'j2K5cicD1E4lmkOQs';

const RPOContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    companyEmail: '',
    jobTitle: '',
    consent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
  
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.company || !formData.companyEmail || !formData.jobTitle || !formData.consent) {
      toast.error('Please fill in all required fields and provide consent!', {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.companyEmail)) {
      toast.error('Please enter a valid company email address!', {
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
      firstName: formData.firstName,
      lastName: formData.lastName,
      fullName: `${formData.firstName} ${formData.lastName}`,
      company: formData.company,
      companyEmail: formData.companyEmail,
      jobTitle: formData.jobTitle,
      consent: formData.consent ? 'Yes' : 'No',
      formType: 'RPO Playbook Request',
      timestamp: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      subject: `RPO Playbook Request from ${formData.firstName} ${formData.lastName}`,
      reply_to: formData.companyEmail
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
        toast.success('Thank you! Your RPO Playbook copy will be sent to your email shortly.', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
    
        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          company: '',
          companyEmail: '',
          jobTitle: '',
          consent: false
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="bg-gray-50 flex items-center justify-center sm:p-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}>
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
      
      <div className="max-w-7xl w-full bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-8">
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content Grid */}
          <div className="grid grid-rows-auto gap-6">
            <div className="grid">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
                Unlock Your RPO Success in India
              </h1>
            </div>
            
            <div className="grid gap-4">
              <p className="text-lg leading-relaxed text-gray-700">
                Get our comprehensive RPO Playbook and discover how to build high-performing teams in India with speed and efficiency.
              </p>
              
              <div className="grid gap-3">
                <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-base text-gray-700">Complete guide to setting up your Recruitment Process Outsourcing in India</p>
                </div>
                
                <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-base text-gray-700">Best practices for talent acquisition and team building</p>
                </div>
                
                <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-base text-gray-700">Cost optimization strategies and market insights</p>
                </div>
                
                <div className="grid grid-cols-[auto_1fr] gap-3 items-start">
                  <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                  <p className="text-base text-gray-700">Proven frameworks for scalable recruitment operations</p>
                </div>
              </div>
              
              <p className="text-sm text-gray-600 mt-2">
                Join hundreds of companies who have successfully established their RPO operations in India with our guidance.
              </p>
            </div>
          </div>

          {/* Right Side - Form Grid */}
          <div className="grid gap-8">
            <div className="grid gap-2">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
                Get Your Free RPO Playbook
              </h2>
              <p className="text-gray-500 text-lg">Fast-Track Your India Set-Up Now</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="grid gap-6">
                {/* Name Fields Grid */}
                <div className="grid gap-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Name <span className="text-red-500 text-xs">(Required)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid gap-1">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                      <label className="text-xs text-gray-500">First</label>
                    </div>
                    <div className="grid gap-1">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                        required
                        disabled={isSubmitting}
                      />
                      <label className="text-xs text-gray-500">Last</label>
                    </div>
                  </div>
                </div>

                {/* Company and Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Company <span className="text-red-500 text-xs">(Required)</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Company Email <span className="text-red-500 text-xs">(Required)</span>
                    </label>
                    <input
                      type="email"
                      name="companyEmail"
                      value={formData.companyEmail}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                {/* Job Title and Consent Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="grid gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Job Title <span className="text-red-500 text-xs">(Required)</span>
                    </label>
                    <input
                      type="text"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                      className="w-full px-0 py-2 border-0 border-b-2 border-gray-300 focus:border-gray-500 focus:outline-none focus:ring-0 transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Consent <span className="text-red-500 text-xs">(Required)</span>
                    </label>
                    <div className="grid grid-cols-[auto_1fr] gap-3 items-start mt-1">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={formData.consent}
                        onChange={handleChange}
                        className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        required
                        disabled={isSubmitting}
                      />
                      <label className="text-sm text-gray-600">
                        I consent to receive the RPO playbook from Capabiliq and to be contacted by Capabiliq sales team.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button Grid */}
                <div className="grid pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-white font-medium py-4 px-8 rounded-full transition-colors duration-200 text-lg ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="grid grid-cols-[auto_1fr] gap-2 items-center justify-center">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Get Your Copy of Capabiliq's RPO Playbook"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RPOContactForm;