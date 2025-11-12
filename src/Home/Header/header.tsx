import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' }
  ];

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-black text-white px-8 py-6 rounded-full max-w-7xl mx-auto mt-6">
      <nav className="flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleNavigation('/')}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform rotate-12"></div>
          <span className="text-xl font-bold">CAPABILIQ</span>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <li key={item.path}>
                <a
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation(item.path);
                  }}
                  className={`transition ${
                    isActive(item.path)
                      ? 'text-purple-500 font-semibold'
                      : 'hover:text-purple-500'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button 
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition"
            onClick={() => handleNavigation('/contact')}
          >
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;