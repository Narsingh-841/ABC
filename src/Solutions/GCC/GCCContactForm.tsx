import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import GCCForm from '../../assets/GCCForm.png';

// Initialize EmailJS
const EMAILJS_SERVICE_ID = 'service_yjhifms';
const EMAILJS_TEMPLATE_ID = 'template_986tjhq';
const EMAILJS_PUBLIC_KEY = 'j2K5cicD1E4lmkOQs';

const GCCContactForm: React.FC = () => {
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
      formType: 'GCC Playbook Request',
      timestamp: new Date().toLocaleString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      subject: `GCC Playbook Request from ${formData.firstName} ${formData.lastName}`,
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
        toast.success('Thank you! Your GCC Playbook copy will be sent to your email shortly.', {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Imported Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={GCCForm} 
                alt="GCC Playbook" 
                className="w-full max-w-md"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-2 leading-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Ready to Build Your GCC in India?
            </h1>
            
            <p className="text-gray-500 text-lg mb-8">Fast-Track Your Set-Up Now</p>

            <form onSubmit={handleSubmit}>
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
                        required
                        disabled={isSubmitting}
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
                        required
                        disabled={isSubmitting}
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
                      required
                      disabled={isSubmitting}
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
                      required
                      disabled={isSubmitting}
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
                      required
                      disabled={isSubmitting}
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
                        required
                        disabled={isSubmitting}
                      />
                      <label className="text-sm text-gray-600">
                        I consent to receive the GCC playbook from Capabiliq and to be contacted by Capabiliq sales team.
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full sm:w-auto text-white font-medium py-4 px-12 rounded-full transition-colors duration-200 text-lg ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Get Your Copy of Capabiliq's GCC Playbook"
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

export default GCCContactForm;