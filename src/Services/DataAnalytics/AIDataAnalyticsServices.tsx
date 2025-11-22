import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AIDataAnalyticsServices: React.FC = () => {
  const navigate = useNavigate();
    const otherServices: { name: string; path: string }[] = [
        { name: 'Cyber Security', path: '/cyber-security' },
        { name: 'Salesforce', path: '/salesforce' },
        { name: 'Tailor-made Digital Tech Solutions', path: '/digital-tech-solutions' }
      ];
  const roles: string[] = [
    'Data Scientist',
    'Machine Learning Engineer',
    'Data Analyst',
    'AI Research Scientist',
    'Business Intelligence',
    'Analyst',
    'Data Engineer',
    'MLOps Engineer',
    'Big Data Architect',
    'Data Visualization',
    'Specialist',
    'Statistical Analyst',
    'Predictive Modeler',
    'Natural Language Processing',
    'Engineer',
    'Computer Vision Engineer',
    'AI Product Manager',
    'Data Governance Specialist'
  ];
  const handleScheduleCall = () => {
    navigate('/contact-us');
  };
  return (
    <div className="min-h-screen py-8 p-4 md:p-8" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", sans-serif' }}>
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
              AI & Data Analytics Services
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              In today's data-driven world, unlocking insights and leveraging artificial intelligence are critical for business innovation and competitive advantage. Our AI & Data Analytics Services provide comprehensive solutions through advanced analytics, machine learning, and intelligent automation. We help businesses transform raw data into actionable intelligence, drive informed decision-making, and create new opportunities for growth and efficiency.
            </p>

            {/* Data-Driven Transformation */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Data-Driven Transformation for Modern Businesses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Data is the new currency, and AI is the engine that drives value from it. Our comprehensive approach combines advanced analytics, machine learning algorithms, and real-time data processing to uncover hidden patterns, predict trends, and automate complex processes. We ensure your organization harnesses the full potential of your data assets.
            </p>

            {/* Customized AI Solutions */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Customized AI Solutions for Every Business Need
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Every organization has unique data challenges and opportunities. Whether you're a startup building your first analytics platform or an enterprise implementing advanced AI systems, our solutions are tailored to your specific data infrastructure, business objectives, and industry requirements. We design scalable AI architectures that evolve with your growing data needs.
            </p>

            {/* End-to-End Analytics */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              End-to-End Analytics and AI Implementation
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              From data collection and preparation to model deployment and monitoring, we provide complete AI and analytics lifecycle management. Our expertise spans predictive modeling, natural language processing, computer vision, and business intelligence. We help you build robust data pipelines and deploy intelligent solutions that deliver measurable business impact.
            </p>

            {/* Driving Innovation */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Driving Innovation Through Intelligent Insights
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Our AI & Data Analytics Services go beyond technology implementation — we drive business innovation. By transforming data into strategic assets, automating decision processes, and creating intelligent systems, we empower businesses to optimize operations, enhance customer experiences, and discover new revenue streams. We make AI and analytics a core competitive advantage for your organization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIDataAnalyticsServices;