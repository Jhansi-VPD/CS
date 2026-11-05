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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Hero – Strong headline, short description, two CTA buttons & premium visual */}
      <HeroSection />

      {/* 2. About – Short company introduction with large professional imagery */}
      <CompanyIntroSection />

      {/* 3. Solutions – Distinctive layout showing IT, Non-IT & Partnership Services */}
      <ServicesOverviewSection />

      {/* 4. Industries – Core enterprise sectors presented visually */}
      <IndustriesPreviewSection />

      {/* 5. How We Work – Refined 6-stage delivery methodology */}
      <GlobalDeliveryModelSection />

      {/* 6. Partnership Opportunities – Structured growth for qualified delivery centers */}
      <PartnerPathwaysSection />

      {/* 7. Final CTA – Bold, clean closing section & meeting schedule trigger */}
      <CtaBannerSection />
    </div>
  );
};

export default HomePage;
