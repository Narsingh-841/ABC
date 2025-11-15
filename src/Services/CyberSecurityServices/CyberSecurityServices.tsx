import React from 'react';

const CyberSecurityServices: React.FC = () => {
  const otherServices: string[] = [
    'AI & Data Analytics',
    'Salesforce',
    'Tailor-made Digital Tech Solutions'
  ];

  const roles: string[] = [
    'Security Engineer',
    'Security Analyst',
    'DevSecOps Engineer',
    'Cybersecurity/Privacy',
    'Attorney',
    'Security Architect',
    'CTI Analyst / Incident',
    'Responder',
    'Red Teamer',
    'Cybersecurity Sales',
    'Engineer',
    'Governance, Risk &',
    'Compliance (GRC)',
    'Specialist',
    'ISO 27001/PCI-DSS',
    'Compliance Manager'
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
                <div key={idx} className="text-white text-sm md:text-base">
                  {service}
                </div>
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
          <button className="w-full bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold py-3 md:py-4 px-6 rounded-3xl hover:opacity-90 transition-opacity text-sm md:text-base">
            Schedule A Call Now
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 space-y-6 md:space-y-8">
          {/* Header Section */}
          <div className="bg-white rounded-none p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-semibold mb-4 md:mb-6" style={{ color: '#2c435b' }}>
              Cyber Security Services
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              In today's digital-first world, protecting sensitive data and maintaining customer trust are critical for business success. Our Cyber Security Services provide comprehensive protection against cyber threats through proactive monitoring, threat intelligence, and strategic defense mechanisms. We help businesses safeguard their systems, ensure compliance, and maintain operational continuity in an increasingly complex threat landscape.
            </p>

            {/* Proactive Protection */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Proactive Protection for Modern Businesses
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Cyber threats are constantly evolving, and so should your defense. Our proactive approach combines advanced technology, real-time threat detection, and expert human oversight to identify vulnerabilities before they become breaches. We ensure your organization remains resilient against malware, phishing, ransomware, and emerging cyber risks.
            </p>

            {/* Tailored Security */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Tailored Security Solutions for Every Need
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              Every organization faces unique security challenges. Whether you're a startup establishing secure frameworks or an enterprise modernizing your IT defenses, our solutions are customized to your specific infrastructure, risk profile, and business objectives. We design scalable security systems that grow with your business.
            </p>

            {/* Collaborative Approach */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Collaborative Approach to Risk Management
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6 md:mb-8 text-sm md:text-base">
              We believe cyber resilience is built through collaboration. Our team partners with your IT and leadership teams to assess risks, implement security policies, and ensure compliance with global standards. Through transparency and knowledge-sharing, we help you create a culture of security across your organization.
            </p>

            {/* Building Trust */}
            <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4" style={{ color: '#2c435b' }}>
              Building Trust Through Data Integrity
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Our Cyber Security Services go beyond protection — we help build trust. By ensuring data integrity, confidentiality, and availability, we empower businesses to operate confidently and maintain credibility in the digital space. From audits to incident response, we make security a strategic advantage for your brand.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CyberSecurityServices;