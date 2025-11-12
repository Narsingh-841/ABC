import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import AboutUS from './AboutUS/AboutUsPage/AboutUsPage';
import AboutUsPage from './AboutUS/AboutUsPage/AboutUsPage';
import HomePage from './HomePage/HomePage';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage/>} />
      </Routes>
    </Router>
  );
};

export default App;
