import React from 'react';
import Header from '../../Home/Header/header';
import Footer from '../../Home/Footer/Footer';
import Welcome from '../Welcome/welcome';
import OurMission from '../OurMission/OurMission';
import JourneyTimeline from '../JourneyTimeline/JourneyTimeline';
import ImpactNumbers from '../ImpactNumbers/ImpactNumbers';
import StreamlinedProcess from '../StreamlinedProcess/StreamlinedProcess';
import ClientTestimonials from '../../Home/ClientTestimonials/ClientTestimonials';
import CapabiligCrew from '../CapabiligCrew/CapabiligCrew';

 // or correct path to your Welcome component

const AboutUsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <Welcome />
      < OurMission />
      <JourneyTimeline />
      <ImpactNumbers />
      <StreamlinedProcess />
      <ClientTestimonials />
      <CapabiligCrew />
     
      <Footer />
    
    </div>
  );
};

export default AboutUsPage;