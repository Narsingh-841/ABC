import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutUsPage from './AboutUS/AboutUsPage/AboutUsPage';
import HomePage from './Home/HomePage/HomePage';
import ContactUs from './ContactUS/contactUs';
import ServiceCyberSecurity from './Services/serviceCyberSecurityPage'; // Add this import
import StaffingPage from './Solutions/StaffingPage';
import Startups from './Solutions/startUpPage'
import Gccpage from './Solutions/GccPage';
import Rpo from './Solutions/Rpopage';



const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/cyber-security" element={<ServiceCyberSecurity />} /> {/* Use the imported component */}
        <Route path="/staffing" element={<StaffingPage />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/gcc" element={<Gccpage />} />
        <Route path="/rpo" element={<Rpo />} />



      </Routes>
    </Router>
  );
};

export default App;