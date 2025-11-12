import React from 'react';
import Header from '../Home/Header/header';
import HeroSection from '../Home/HeroSection/HeroSection';
import TrustedCompanies from '../Home/TrustedCompanies/TrustedCompanies';
import ServicesSection from '../Home/ServiceSection/ServicesSection';
import ConfidenceSection from '../Home/ConfidenceSection/ConfidenceSection';
import GrowthPartnerSection from '../Home/GrowthPartnerSection/GrowthPartnerSection';
import TrustStatsSection from '../Home/TrustStatsSection/TrustStatsSection';
import CaseStudyCarousel from '../Home/CaseStudyCarousel/CaseStudyCarousel';
import AboutCapabiliq from '../Home/About/AboutCapabiliq';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import CTABanner from '../Home/CTABanner/CTABanner';
import Footer from '../Home/Footer/Footer';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <HeroSection />
      <TrustedCompanies />
      <ServicesSection />
      <ConfidenceSection />
      <GrowthPartnerSection />
      <TrustStatsSection />
      <CaseStudyCarousel />
      <AboutCapabiliq />
      <ClientTestimonials />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default HomePage;
