import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ApproachPage from './pages/ApproachPage';
import ServicesPage from './pages/ServicesPage';
import LeadershipPage from './pages/LeadershipPage';
import CollectionServicesPage from './pages/CollectionServicesPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import CredentialingPage from './pages/CredentialingPage';
import CodingPage from './pages/CodingPage';
import DenialPage from './pages/DenialPage';
import ARRecoveryPage from './pages/ARRecoveryPage';
import EligibilityPage from './pages/EligibilityPage';
import VirtualAssistantPage from './pages/VirtualAssistantPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import HIPAAPage from './pages/HIPAAPage';
import NotFoundPage from './pages/NotFoundPage';
import BlogPage from './pages/BlogPage';
import { AnimatePresence } from 'framer-motion';
import SEOManager from './components/SEOManager';
import ParallaxParticles from './components/ParallaxParticles';
import LiveChat from './components/LiveChat';
import CookieConsent from './components/CookieConsent';

const getInitialPage = () => {
  if (typeof window === 'undefined') return 'home';
  const path = window.location.pathname.replace(/^\/|\/$/g, '');
  const pathMap = {
    '': 'home',
    'home': 'home',
    'approach': 'approach',
    'services': 'services',
    'leadership': 'leadership',
    'collections': 'collections',
    'collection-services': 'collections',
    'careers': 'careers',
    'contact': 'contact',
    'testimonials': 'testimonials',
    'about': 'about',
    'faq': 'faq',
    'credentialing': 'credentialing',
    'medical-coding': 'coding',
    'denial-management': 'denial',
    'ar-recovery': 'ar-recovery',
    'eligibility-verification': 'eligibility',
    'prior-authorization': 'eligibility',
    'virtual-medical-assistant': 'virtual-assistant',
    'privacy-policy': 'privacy',
    'terms-of-service': 'terms',
    'hipaa-compliance': 'hipaa',
    'blog': 'blog'
  };
  const page = pathMap[path];
  if (page) return page;
  if (path !== '') return 'not-found';
  return 'home';
};

function App() {
  const [theme, setTheme] = useState('light');
  const [currentPage, setCurrentPageState] = useState(getInitialPage());

  const setCurrentPage = (page) => {
    setCurrentPageState(page);
    const pathMap = {
      home: '/',
      approach: '/approach',
      services: '/services',
      leadership: '/leadership',
      collections: '/collection-services',
      careers: '/careers',
      contact: '/contact',
      testimonials: '/testimonials',
      about: '/about',
      faq: '/faq',
      credentialing: '/credentialing',
      coding: '/medical-coding',
      denial: '/denial-management',
      'ar-recovery': '/ar-recovery',
      eligibility: '/eligibility-verification',
      'virtual-assistant': '/virtual-medical-assistant',
      privacy: '/privacy-policy',
      terms: '/terms-of-service',
      hipaa: '/hipaa-compliance',
      blog: '/blog',
      'not-found': '/not-found'
    };
    const path = pathMap[page] || '/';
    if (window.location.pathname !== path) {
      window.history.pushState({ page }, '', path);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPageState(getInitialPage());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const pageBackgrounds = {
      home: 'url(/home_bg.png)',
      approach: 'url(/approach_bg.png)',
      services: 'url(/services_bg.png)',
      leadership: 'url(/leadership_bg.png)',
      collections: 'url(/collections_bg.png)',
      careers: 'url(/careers_bg.png)',
      contact: 'url(/contact_bg.png)',
      testimonials: 'url(/testimonials_bg.png)',
      about: 'url(/approach_bg.png)',
      faq: 'url(/testimonials_bg.png)',
      credentialing: 'url(/services_bg.png)',
      coding: 'url(/services_bg.png)',
      denial: 'url(/services_bg.png)',
      'ar-recovery': 'url(/collections_bg.png)',
      eligibility: 'url(/services_bg.png)',
      'virtual-assistant': 'url(/careers_bg.png)',
      privacy: 'url(/approach_bg.png)',
      terms: 'url(/approach_bg.png)',
      hipaa: 'url(/approach_bg.png)',
      blog: 'url(/testimonials_bg.png)'
    };
    const bgUrl = pageBackgrounds[currentPage] || 'url(/clinic_bg.webp)';
    document.documentElement.style.setProperty('--page-bg', bgUrl);
  }, [currentPage]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home key="home" setCurrentPage={setCurrentPage} />;
      case 'approach':
        return <ApproachPage key="approach" />;
      case 'services':
        return <ServicesPage key="services" />;
      case 'leadership':
        return <LeadershipPage key="leadership" />;
      case 'collections':
        return <CollectionServicesPage key="collections" />;
      case 'careers':
        return <CareersPage key="careers" />;
      case 'contact':
        return <ContactPage key="contact" />;
      case 'testimonials':
        return <TestimonialsPage key="testimonials" />;
      case 'about':
        return <AboutPage key="about" />;
      case 'faq':
        return <FAQPage key="faq" />;
      case 'credentialing':
        return <CredentialingPage key="credentialing" />;
      case 'coding':
        return <CodingPage key="coding" />;
      case 'denial':
        return <DenialPage key="denial" />;
      case 'ar-recovery':
        return <ARRecoveryPage key="ar-recovery" />;
      case 'eligibility':
        return <EligibilityPage key="eligibility" />;
      case 'virtual-assistant':
        return <VirtualAssistantPage key="virtual-assistant" />;
      case 'privacy':
        return <PrivacyPage key="privacy" />;
      case 'terms':
        return <TermsPage key="terms" />;
      case 'hipaa':
        return <HIPAAPage key="hipaa" />;
      case 'blog':
        return <BlogPage key="blog" />;
      case 'not-found':
        return <NotFoundPage key="not-found" setCurrentPage={setCurrentPage} />;
      default:
        return <Home key="home" setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <SEOManager currentPage={currentPage} />
      <ParallaxParticles />
      <Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main className="main-content-layout">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer setCurrentPage={setCurrentPage} />
      <LiveChat setCurrentPage={setCurrentPage} />
      <CookieConsent setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
