'use client';

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
      {/* 1. Hero – Editorial typographic opening with global connection band */}
      <HeroSection />

      {/* 2. About – Typographic manifesto with numbered capability columns */}
      <CompanyIntroSection />

      {/* 3. Solutions – Asymmetric horizontal showcase, one band per capability */}
      <ServicesOverviewSection />

      {/* 4. Industries – Image-led feature with typographic capability strips */}
      <IndustriesPreviewSection />

      {/* 5. How We Work – Refined 6-stage delivery methodology */}
      <GlobalDeliveryModelSection />

      {/* 6. Partnership Opportunities – Connected ecosystem diagram + screening criteria */}
      <PartnerPathwaysSection />

      {/* 7. Final CTA – Full-bleed Midnight Navy closing section & meeting schedule trigger */}
      <CtaBannerSection />
    </div>
  );
};

export default HomePage;
