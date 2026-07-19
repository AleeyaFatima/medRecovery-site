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
import { AnimatePresence } from 'framer-motion';
import SEOManager from './components/SEOManager';

function App() {
  const [theme, setTheme] = useState('light');

  const [currentPage, setCurrentPage] = useState('home');

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
      default:
        return <Home key="home" setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className={`app-wrapper ${theme}`}>
      <SEOManager currentPage={currentPage} />
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
      <Footer />
    </div>
  );
}

export default App;
