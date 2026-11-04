import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { CookieBanner } from './components/common/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ITSolutionsPage } from './pages/ITSolutionsPage';
import { NonITSolutionsPage } from './pages/NonITSolutionsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PartnershipsPage } from './pages/PartnershipsPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { ProjectOpportunitiesPage } from './pages/ProjectOpportunitiesPage';
import { StrategicDiscussionsPage } from './pages/StrategicDiscussionsPage';
import { InsightsPage } from './pages/InsightsPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsOfServicePage } from './pages/TermsOfServicePage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll to top or anchor component
const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow relative z-10 bg-white parallax-footer-shadow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/solutions" element={<ServicesPage />} />
            <Route path="/services/it-solutions" element={<ITSolutionsPage />} />
            <Route path="/solutions/it-solutions" element={<ITSolutionsPage />} />
            <Route path="/services/non-it-solutions" element={<NonITSolutionsPage />} />
            <Route path="/solutions/non-it-solutions" element={<NonITSolutionsPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/partnerships" element={<PartnershipsPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/project-opportunities" element={<ProjectOpportunitiesPage />} />
            <Route path="/strategic-discussions" element={<StrategicDiscussionsPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </BrowserRouter>
  );
};

export default App;
