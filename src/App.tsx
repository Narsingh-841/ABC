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
import Salesforce from './Services/salesforce';
import Dataanalytics from  './Services/DataAnalytics';
import Digitaltechsolutions from './Services/DigitalTechSolutions';
import ScrollToTop from './ScrollToTop';
import Hiredeveloper from './HireDeveloper/HireDeveloperPage';
import Hiredeloperform from './HireDeveloper/HireDeveloperForm/HireDeveloperFormPage';



const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop /> 
      <Routes>
      
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage/>} />
        <Route path="/contact-us" element={<ContactUs/>} />
        <Route path="/cyber-security" element={<ServiceCyberSecurity />} /> {/* Use the imported component */}
        <Route path="/staffing" element={<StaffingPage />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/gcc" element={<Gccpage />} />
        <Route path="/rpo" element={<Rpo />} />
        <Route path="/salesforce" element={<Salesforce />} />
        <Route path="/data-analytics" element={<Dataanalytics />} />
        <Route path="/digital-tech-solutions" element={<Digitaltechsolutions />} />
        <Route path="/hire-developer" element={<Hiredeveloper />} />
        <Route path="/hire-developer-form" element={<Hiredeloperform />} />



      </Routes>
    </Router>
  );
};

export default App;