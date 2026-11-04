import React, { useEffect } from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CompanyIntroSection } from '../components/home/CompanyIntroSection';
import { ServicesOverviewSection } from '../components/home/ServicesOverviewSection';
import { IndustriesPreviewSection } from '../components/home/IndustriesPreviewSection';
import { GlobalDeliveryModelSection } from '../components/home/GlobalDeliveryModelSection';
import { PartnerPathwaysSection } from '../components/home/PartnerPathwaysSection';
import { CtaBannerSection } from '../components/home/CtaBannerSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Coral Swift | Connecting Global Opportunities with Delivery Excellence';
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Hero – Strong headline, short description, two CTA buttons */}
      <HeroSection />

      {/* 2. About – Brief introduction about Coral Swift */}
      <CompanyIntroSection />

      {/* 3. Solutions – IT Solutions and Non-IT Solutions */}
      <ServicesOverviewSection />

      {/* 4. Industries – Industries served, presented visually */}
      <IndustriesPreviewSection />

      {/* 5. Our Approach – A simple visual showing how we work */}
      <GlobalDeliveryModelSection />

      {/* 6. Partnerships – Short partnership introduction and CTA */}
      <PartnerPathwaysSection />

      {/* 7. Final CTA – Strong closing message and contact link */}
      <CtaBannerSection />
    </div>
  );
};

export default HomePage;
