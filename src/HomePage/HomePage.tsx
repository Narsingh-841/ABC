import React from 'react';
import Header from '../Header/header';
import HeroSection from '../HeroSection/HeroSection';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import ServicesSection from '../ServiceSection/ServicesSection';
import ConfidenceSection from '../ConfidenceSection/ConfidenceSection';
import GrowthPartnerSection from '../GrowthPartnerSection/GrowthPartnerSection';
import TrustStatsSection from '../TrustStatsSection/TrustStatsSection';
import CaseStudyCarousel from '../CaseStudyCarousel/CaseStudyCarousel';
import AboutCapabiliq from '../About/AboutCapabiliq';
import ClientTestimonials from '../ClientTestimonials/ClientTestimonials';
import CTABanner from '../CTABanner/CTABanner';
import Footer from '../Footer/Footer';


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
