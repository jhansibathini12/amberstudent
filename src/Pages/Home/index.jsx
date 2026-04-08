import React from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import StatsSection from '../../components/statssection';
import CitiesSection from '../../components/citiessection';
import PropertiesSection from '../../components/PropertiesSection';
import TestimonialsSection from '../../components/Testimonialsection';
import FeaturesSection from '../../components/featuresection';
import OffersSection from '../../components/OffersSection';
import ProcessSection from '../../components/processSection';
import PartnersSection from '../../components/partnerSection';
import Footer from '../../components/Footer';

import './index.css';

const Home = () => {
  return (
    <div className="home-page-wrapper">
      <Navbar />
      <main className="home-main-content">
        <Hero />
        <StatsSection />
        <CitiesSection />
        <PropertiesSection />
        <TestimonialsSection />
        <FeaturesSection />
        <OffersSection />
        <ProcessSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;