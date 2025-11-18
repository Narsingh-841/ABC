import React from 'react';
import Header from '../Header/header';
import HeroSection from '../HeroSection/HeroSection';
import GCCSection from '../GCCSection/GCCSection';
import TrustedCompanies from '../TrustedCompanies/TrustedCompanies';
import SolutionSection from '../SolutionSection/SolutionSection';
import HiringProcessTimeline from '../HiringProcessTimeline/HiringProcessTimeline';
import ServicesWeOffer from '../ServicesWeOffer/ServicesWeOffer';
import StoriesSection from '../StoriesSection/StoriesSection';
import ClientTestimonials from '../ClientTestimonials/ClientTestimonials';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import CTABanner from '../CTABanner/CTABanner';
import Footer from '../Footer/Footer';
import ProcessImage from '../Process/ProcessImage';



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
      <ProcessImage />
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
