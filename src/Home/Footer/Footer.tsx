import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import capfooter from '../../assets/capfooter.png';

const Footer = () => {
  const services = [
    { name: "Cyber Security", path: "/cyber-security" },
    { name: "AI & Data Analytics", path: "/data-analytics" },
    { name: "Salesforce", path: "/salesforce" },
    { name: "Tailor-Made Digital Tech Solutions", path: "/digital-tech-solutions" }
  ];

  const solutions = [
    { name: "Staffing", path: "/staffing" },
    { name: "StartUp", path: "/startups" },
    { name: "GCC", path: "/gcc" },
    { name: "RPO", path: "/rpo" },
  ];

  const resources = [
    { name: "Blog", path: "/blog" }
  ];

  const company = [
    { name: "About Us", path: "/about-us" },
    { name: "Contact Us", path: "/contact-us" },
    { name: "Hire Developer", path: "/hire-developer" }
  ];

  const handleLogoClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#0A1929] text-white">
      {/* Main Footer Content */}
      <div className="w-full px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-start">
            {/* Logo and Social Section */}
            <div className="flex flex-col items-start text-left">
              <Link 
                to="/" 
                className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 no-underline"
                onClick={handleLogoClick}
              >
                <img 
                  src={capfooter} 
                  alt="CapabiliQ Logo" 
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </Link>

              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Follow Us on</h3>
              <div className="flex gap-2 sm:gap-3">
                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/company/capabiliq" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-600 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                {/* Twitter */}
                <a 
                  href="https://twitter.com/capabiliq" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-600 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                {/* Instagram */}
                <a 
                  href="https://instagram.com/capabiliq" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-600 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
                {/* YouTube */}
                <a 
                  href="https://youtube.com/capabiliq" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 sm:w-10 sm:h-10 bg-gray-600 hover:bg-purple-600 rounded-lg flex items-center justify-center transition-colors duration-300"
                  aria-label="YouTube"
                >
                  <FaYoutube className="w-4 sm:w-5 h-4 sm:h-5" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-3">
                {services.map((service, idx) => (
                  <li key={idx}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Column */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Solutions</h3>
              <ul className="space-y-2 sm:space-y-3">
                {solutions.map((solution, idx) => (
                  <li key={idx}>
                    <Link 
                      to={solution.path} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {solution.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
              <ul className="space-y-2 sm:space-y-3">
                {resources.map((resource, idx) => (
                  <li key={idx}>
                    <Link 
                      to={resource.path} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div className="flex flex-col items-start text-left">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Company</h3>
              <ul className="space-y-2 sm:space-y-3">
                {company.map((item, idx) => (
                  <li key={idx}>
                    <Link 
                      to={item.path} 
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="w-full px-4 sm:px-6 md:px-8 py-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-gray-400 text-xs sm:text-sm">
                ©CAPABILIQ 2025 | All Rights Reserved
              </p>
              <Link 
                to="/terms-conditions" 
                className="text-gray-400 hover:text-purple-400 text-xs sm:text-sm transition-colors duration-300"
                onClick={() => window.scrollTo(0, 0)}
              >
                Terms & conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;