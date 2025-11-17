import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SalesforceServices: React.FC = () => {
  const navigate = useNavigate();
    const otherServices: { name: string; path: string }[] = [
        { name: 'AI & Data Analytics', path: '/data-analytics' },
        { name: 'Cyber Security', path: '/cyber-security' },
        { name: 'Tailor-made Digital Tech Solutions', path: '/digital-tech-solutions' }
      ];

  const roles: string[] = [
    'Salesforce Developer',
    'Salesforce Administrator',
    'Salesforce Architect',
    'Business Analyst',
    'Salesforce Consultant',
    'CRM Manager',
    'Sales Cloud Specialist',
    'Service Cloud Specialist',
    'Marketing Cloud Specialist',
    'Commerce Cloud Developer',
    'Platform Developer',
    'Integration Specialist',
    'Salesforce Project Manager',
    'Solution Architect',
    'Data Migration Specialist'
  ];
  const handleScheduleCall = () => {
    navigate('/contact-us');
  };
  return (
    <div className="min-h-screen  p-4 md:p-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 md:gap-8">
        {/* Left Sidebar */}
        <div className="w-full lg:w-80 flex-shrink-0 space-y-6">
          {/* Other Key Services */}
          <div className="rounded-3xl p-6 md:p-8 text-white" style={{ backgroundColor: '#760060' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Other Key Services</h2>
            <div className="space-y-3 md:space-y-4">
  {otherServices.map((service, idx) => (
    <Link 
      key={idx} 
      to={service.path}
      className="text-white text-sm md:text-base hover:text-gray-200 transition-colors block"
    >
      {service.name}
    </Link>
  ))}
</div>
          </div>

          {/* We Have */}
          <div className="rounded-3xl p-6 md:p-8 text-white" style={{ backgroundColor: '#760060' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">We Have</h2>
            <ul className="space-y-2">
              {roles.map((role, idx) => (
                <li key={idx} className="text-white text-xs md:text-sm flex items-start">
                  <span className="mr-2">•</span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button 
            onClick={handleScheduleCall}
            className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-3 md:py-4 px-6 rounded-3xl hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Schedule A Call Now
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Header Section */}
          <div className="bg-white rounded-none p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6" style={{ color: '#2c435b' }}>
              Salesforce Services
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              In today's customer-centric world, building meaningful relationships and driving business growth require powerful CRM solutions. Our Salesforce Services provide comprehensive implementation, customization, and optimization of the Salesforce platform to help businesses streamline operations, enhance customer engagement, and accelerate growth. We transform how you connect with customers across sales, service, marketing, and commerce.
            </p>

            {/* Strategic Implementation */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Strategic Implementation for Business Transformation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Salesforce is more than just a CRM—it's a platform for business transformation. Our strategic approach combines deep platform expertise with industry best practices to implement Salesforce solutions that align with your unique business processes and growth objectives. We ensure seamless integration with your existing systems and workflows.
            </p>

            {/* Customized Solutions */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Customized Solutions for Every Business Need
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Every organization has unique customer engagement challenges. Whether you're a startup building your first CRM system or an enterprise scaling across multiple clouds, our solutions are tailored to your specific requirements. We design scalable Salesforce implementations that grow with your business and adapt to changing market demands.
            </p>

            {/* End-to-End Services */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              End-to-End Salesforce Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              From initial consultation and implementation to ongoing support and optimization, we provide comprehensive Salesforce services. Our expertise spans Sales Cloud, Service Cloud, Marketing Cloud, Commerce Cloud, and Platform development. We help you maximize your Salesforce investment through continuous improvement and innovation.
            </p>

            {/* Driving Growth */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Driving Growth Through Customer Success
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Our Salesforce Services go beyond technology implementation — we help drive business growth. By optimizing customer journeys, automating processes, and providing actionable insights, we empower businesses to increase sales productivity, improve customer satisfaction, and accelerate revenue growth. We make Salesforce a strategic advantage for your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesforceServices;