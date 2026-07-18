import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme, currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Welcome', value: 'home' },
    { name: 'Unique Approach', value: 'approach' },
    { name: 'Services', value: 'services' },
    { name: 'Leadership', value: 'leadership' },
    { name: 'Collection Services', value: 'collections' },
    { name: 'Careers', value: 'careers' },
    { name: 'Contact Us/Get Started', value: 'contact' },
    { name: 'Testimonials', value: 'testimonials' },
  ];

  const handleNavClick = (value) => {
    setCurrentPage(value);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const logoSrc = theme === 'dark' ? '/logo_dark.png?v=3' : '/logo_light.png?v=3';

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand Image Logo Container */}
        <button onClick={() => handleNavClick('home')} className="logo-btn-box" aria-label="MedRecovery Home">
          <img 
            src={logoSrc} 
            alt="MedRecovery Solutions, LLC Logo" 
            className="logo-img-branding" 
          />
        </button>

        {/* Desktop Navigation Link Tabs (Prominent tab-bar styling) */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.value)}
              className={`nav-link-btn ${currentPage === link.value ? 'active' : ''}`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Right Actions */}
        <div className="nav-actions">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle light/dark theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="menu-toggle"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`mobile-menu-overlay ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(false)}>
        <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
          <div className="mobile-menu-header">
            <img 
              src={logoSrc} 
              alt="MedRecovery Solutions, LLC Logo" 
              className="logo-img-branding" 
              style={{ height: '80px' }}
            />
            <button onClick={() => setIsOpen(false)} className="menu-close">
              <X size={24} />
            </button>
          </div>
          <div className="mobile-links">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`mobile-link-btn ${currentPage === link.value ? 'active' : ''}`}
                onClick={() => handleNavClick(link.value)}
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 80px;
          display: flex;
          align-items: center;
          transition: all var(--transition-normal);
          background: #FFFFFF !important; /* Solid background shelf to block scrolling text */
          border-bottom: 1px solid var(--color-border) !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);
          padding: 0;
        }
        .navbar.scrolled {
          height: 72px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.05);
        }
        .dark .navbar {
          background: #0F0A1C !important;
          border-color: rgba(255, 255, 255, 0.06) !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .dark .navbar.scrolled {
          background: #0F0A1C !important;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          overflow: visible; /* Prevent any logo clipping */
        }
        
        /* Logo branding - Standard clean SaaS sizing, extremely sharp & legible */
        .logo-btn-box {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          overflow: visible;
        }
        .logo-img-branding {
          height: 48px; /* Compact natural sizing matching Cedar/Headway */
          width: auto;
          object-fit: contain;
          overflow: visible;
          transition: all var(--transition-normal);
          filter: contrast(1.18) saturate(1.12) brightness(0.96); /* Darkens gray text to optimize contrast */
          animation: treeBloom 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        @keyframes treeBloom {
          0% {
            transform: scale(0.7) translateY(4px);
            opacity: 0;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }
        .navbar.scrolled .logo-img-branding {
          height: 40px;
        }
        .dark .logo-img-branding {
          filter: none;
        }
        
        /* Modern minimal text links matching Headway/Cedar */
        .nav-links-desktop {
          display: flex;
          gap: 28px;
          align-items: center;
        }
        .nav-link-btn {
          background: transparent;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 0.94rem;
          padding: 8px 0;
          transition: color var(--transition-fast);
          text-transform: capitalize;
          border-radius: 0;
          position: relative;
        }
        .dark .nav-link-btn {
          color: rgba(255, 255, 255, 0.7);
        }
        .nav-link-btn:hover {
          color: var(--color-primary);
          background-color: transparent !important;
        }
        .dark .nav-link-btn:hover {
          color: #FFFFFF;
          background-color: transparent !important;
        }
        .nav-link-btn.active {
          background: transparent !important;
          color: var(--color-primary) !important;
          font-weight: 700;
          box-shadow: none !important;
        }
        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2.5px;
          background-color: var(--color-primary);
          border-radius: 4px;
        }
        .dark .nav-link-btn.active {
          background: transparent !important;
          color: var(--color-primary) !important;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-shrink: 0;
        }
        .theme-toggle {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 8px;
          border-radius: 50%;
          transition: all var(--transition-fast);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-toggle:hover {
          color: var(--color-primary);
          background-color: var(--bg-surface-hover);
        }
        .menu-toggle {
          display: none;
        }
        
        /* Mobile Overlay and Drawer */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(15, 11, 30, 0.4);
          z-index: 1001;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(4px);
        }
        .mobile-menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }
        .mobile-menu {
          position: absolute;
          top: 0;
          right: 0;
          width: 80%;
          max-width: 320px;
          height: 100%;
          background: var(--bg-surface);
          box-shadow: -10px 0 30px rgba(0, 0, 0, 0.15);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 32px;
          transform: translateX(100%);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .mobile-menu-overlay.open .mobile-menu {
          transform: translateX(0);
        }
        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .menu-close {
          background: none;
          border: none;
          color: var(--text-primary);
          cursor: pointer;
        }
        .mobile-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1rem;
          padding: 12px 0;
          border-bottom: 1px solid var(--color-border);
          width: 100%;
        }
        .mobile-link-btn.active {
          color: var(--color-primary);
        }

        @media (max-width: 1250px) {
          .nav-links-desktop {
            display: none;
          }
          .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--bg-surface-hover);
            color: var(--text-primary);
            padding: 8px;
          }
        }
      `}</style>
    </nav>
  );
}
