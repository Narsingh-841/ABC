import React from 'react';
import Header from '../Home/Header/header';
import HeroSection from '../Home/HeroSection/HeroSection';
import TrustedCompanies from '../Home/TrustedCompanies/TrustedCompanies';
import ClientTestimonials from '../Home/ClientTestimonials/ClientTestimonials';
import CTABanner from '../Home/CTABanner/CTABanner';
import Footer from '../Home/Footer/Footer';
import GCCSection from '../Home/GCCSection/GCCSection';
import SolutionSection from '../Home/SolutionSection/SolutionSection';
import HiringProcessTimeline from '../Home/HiringProcessTimeline/HiringProcessTimeline';
import ServicesWeOffer from '../Home/ServicesWeOffer/ServicesWeOffer';
import FAQAccordion from '../Home/FAQAccordion/FAQAccordion';
import StoriesSection from '../Home/StoriesSection/StoriesSection';


const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <HeroSection />
      <GCCSection />
      <TrustedCompanies />
      <SolutionSection />
      <HiringProcessTimeline />
      <ServicesWeOffer />
      {/* <ServicesSection />
      <ConfidenceSection />
      <GrowthPartnerSection />
      <TrustStatsSection />
      <CaseStudyCarousel />
      <AboutCapabiliq /> */}
      <StoriesSection />
      <ClientTestimonials />
      <FAQAccordion />
      <CTABanner />
      <Footer />
    </div>
  );
};

export default HomePage;
