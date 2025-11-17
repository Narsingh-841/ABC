import React from 'react';
import { Link } from 'react-router-dom';

const DigitalTechSolutionsServices: React.FC = () => {
  const otherServices: { name: string; path: string }[] = [
    { name: 'Cyber Security', path: '/cyber-security' },
    { name: 'Salesforce', path: '/salesforce' },
    { name: 'AI & Data Analytics', path: '/data-analytics' }
  ];

  const technologies: string[] = [
    'Cloud Native Development',
    'Microservices Architecture',
    'DevOps & CI/CD',
    'IoT Solutions',
    'Blockchain Development',
    'Mobile App Development',
    'Web Application Development',
    'API Development & Integration',
    'Legacy System Modernization',
    'Digital Platform Engineering',
    'Cloud Migration Services',
    'Containerization & Orchestration',
    'Progressive Web Apps (PWA)',
    'Headless CMS Implementation',
    'Digital Experience Platforms',
    'Low-Code/No-Code Solutions'
  ];

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

          {/* Technologies We Master */}
          <div className="rounded-3xl p-6 md:p-8 text-white" style={{ backgroundColor: '#760060' }}>
            <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">Technologies We Master</h2>
            <ul className="space-y-2">
              {technologies.map((tech, idx) => (
                <li key={idx} className="text-white text-xs md:text-sm flex items-start">
                  <span className="mr-2">•</span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-3 md:py-4 px-6 rounded-3xl hover:opacity-90 transition-opacity text-sm md:text-base">
            Schedule A Call Now
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Header Section */}
          <div className="bg-white rounded-none p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6" style={{ color: '#2c435b' }}>
              Tailor-made Digital Tech Solutions
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              In today's rapidly evolving digital landscape, businesses need customized technology solutions that align with their unique challenges and growth objectives. Our Tailor-made Digital Tech Solutions provide end-to-end development and implementation services, creating scalable, future-proof systems that drive innovation and operational excellence. We bridge the gap between your business vision and technological execution.
            </p>

            {/* Bespoke Development Approach */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Bespoke Development for Unique Business Challenges
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Off-the-shelf solutions often fall short of addressing specific business needs. Our custom development approach begins with deep understanding of your operations, goals, and constraints. We design and build digital solutions that perfectly fit your workflow, integrate seamlessly with existing systems, and scale with your growth. From concept to deployment, we ensure every feature serves your strategic objectives.
            </p>

            {/* Full-Stack Expertise */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Full-Stack Expertise Across Modern Technologies
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Our team brings comprehensive expertise across the entire technology stack. Whether you need cloud-native applications, mobile solutions, enterprise systems, or emerging technology implementations, we have the skills to deliver. We stay at the forefront of technology trends, ensuring your solutions leverage the most effective and sustainable tools and frameworks available.
            </p>

            {/* Agile Delivery Methodology */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Agile Delivery Methodology for Maximum Value
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              We follow an agile, iterative approach to development that ensures continuous delivery of value and early validation of concepts. Through regular demos, feedback cycles, and adaptive planning, we keep your project on track and aligned with evolving requirements. Our transparent process ensures you're involved at every stage and can see progress in real-time.
            </p>

            {/* Future-Proof Solutions */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Future-Proof Solutions for Long-Term Success
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Our digital solutions are built not just for today's needs, but for tomorrow's challenges. We architect systems with scalability, maintainability, and extensibility in mind. Whether you're building a minimum viable product or enterprise-grade platform, we ensure your technology investment continues to deliver value as your business evolves and grows in the digital economy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DigitalTechSolutionsServices;