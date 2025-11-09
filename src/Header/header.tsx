import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-8 py-6 rounded-full max-w-7xl mx-auto mt-6">
     <nav className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg transform rotate-12"></div>
          <span className="text-xl font-bold">CAPABILIQ</span>
        </div>
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#home" className="hover:text-purple-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-purple-500 transition">About</a></li>
            <li><a href="#services" className="hover:text-purple-500 transition">Services</a></li>
            <li><a href="#blog" className="hover:text-purple-500 transition">Blog</a></li>
          </ul>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition">
            Contact Us
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
