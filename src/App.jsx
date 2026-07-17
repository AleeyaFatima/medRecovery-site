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

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return systemPrefersDark ? 'dark' : 'light';
  });

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
