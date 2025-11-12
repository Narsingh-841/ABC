
import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const services = [
    "Cyber Security",
    "AI & Data Analytics",
    "Salesforce",
    "Tailor-Made Digital Tech Solutions"
  ];

  const solutions = [
    "AI + Human-Led Talent Intelligence",
    "Strategic Talent Consulting",
    "Embedded TA Pods",
    "Global Capability Centers (GCC 2.0)",
    "Startup ScaleOps"
  ];

  const resources = [
    "Blog"
  ];

  const company = [
    "About Us",
    "Contact Us"
  ];

  return (
    <footer className="bg-[#0A1929] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[90rem] mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 px-12 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* Logo and Social Section - Centered content */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6 justify-center md:justify-start">
              <svg className="w-10 h-10" viewBox="0 0 40 40" fill="none">
                <rect x="0" y="0" width="18" height="18" fill="#E91E63" rx="2"/>
                <rect x="22" y="0" width="18" height="18" fill="#9C27B0" rx="2"/>
                <rect x="0" y="22" width="18" height="18" fill="#673AB7" rx="2"/>
                <rect x="22" y="22" width="18" height="18" fill="#3F51B5" rx="2"/>
              </svg>
              <span className="text-2xl font-bold tracking-wide">CAPABILIQ</span>
              <span className="text-pink-500 text-3xl">.</span>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-center md:text-left w-full">Follow Us on</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              {/* LinkedIn */}
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              {/* Twitter */}
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              {/* Instagram */}
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              {/* YouTube */}
              <a 
                href="#" 
                className="w-12 h-12 bg-gray-700 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Services Column - Centered */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 w-full text-center md:text-left">Services</h3>
            <ul className="space-y-3 w-full">
              {services.map((service, idx) => (
                <li key={idx} className="text-center md:text-left">
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Column - Centered */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 w-full text-center md:text-left">Solutions</h3>
            <ul className="space-y-3 w-full">
              {solutions.map((solution, idx) => (
                <li key={idx} className="text-center md:text-left">
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column - Centered */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 w-full text-center md:text-left">Resources</h3>
            <ul className="space-y-3 w-full">
              {resources.map((resource, idx) => (
                <li key={idx} className="text-center md:text-left">
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column - Centered */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-semibold mb-4 w-full text-center md:text-left">Company</h3>
            <ul className="space-y-3 w-full">
              {company.map((item, idx) => (
                <li key={idx} className="text-center md:text-left">
                  <a href="#" className="text-gray-300 hover:text-purple-400 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Centered */}
      <div className="border-t border-gray-700">
        <div className="max-w-[90rem] mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              ©CAPABILIQ 2025 | All Rights Reserved
            </p>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors duration-300">
              Terms & conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;