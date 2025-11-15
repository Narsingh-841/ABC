import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutUsPage from './AboutUS/AboutUsPage/AboutUsPage';
import HomePage from './HomePage/HomePage';
import ContactUs from './ContactUS/contactUs';
import ServiceCyberSecurity from './Services/serviceCyberSecurityPage'; // Add this import

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/cyber-security" element={<ServiceCyberSecurity />} /> {/* Use the imported component */}
      </Routes>
    </Router>
  );
};

export default App;