'use client';

import React, { useEffect } from 'react';
import { AboutHero } from '../components/about/AboutHero';
import { BusinessPurposeSection } from '../components/about/BusinessPurposeSection';
import { VisionMissionSection } from '../components/about/VisionMissionSection';
import { EcosystemSection } from '../components/about/EcosystemSection';
import { ApproachPillarsSection } from '../components/about/ApproachPillarsSection';
import { ExploreMoreSection } from '../components/about/ExploreMoreSection';
import { ClosingCtaSection } from '../components/about/ClosingCtaSection';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Coral Swift - Purpose, Vision & Business Model';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white">
      <AboutHero />
      <BusinessPurposeSection />
      <VisionMissionSection />
      <EcosystemSection />
      <ApproachPillarsSection />
      <ExploreMoreSection />
      <ClosingCtaSection />
    </div>
  );
};

export default AboutPage;
