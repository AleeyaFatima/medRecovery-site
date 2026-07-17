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
    { name: 'Services', value: 'services' },
    { name: 'Our Approach', value: 'approach' },
    { name: 'About', value: 'about' },
    { name: 'FAQ', value: 'faq' },
    { name: 'Contact', value: 'contact' },
  ];

  const handleNavClick = (value) => {
    setCurrentPage(value);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand Image Logo Container */}
        <button onClick={() => handleNavClick('home')} className="logo-btn-box" aria-label="MedRecovery Home">
          <img 
            src="/logo.png" 
            alt="MedRecovery Solutions, LLC Logo" 
            className="logo-img-branding" 
          />
        </button>

        {/* Desktop Links */}
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
          
          <button onClick={() => handleNavClick('contact')} className="btn btn-primary btn-sm btn-nav-cta">
            Schedule Consultation
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
              src="/logo.png" 
              alt="MedRecovery Solutions, LLC Logo" 
              className="logo-img-branding" 
              style={{ height: '50px' }}
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
            <button
              className="btn btn-primary mobile-cta"
              onClick={() => handleNavClick('contact')}
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 100px;
          display: flex;
          align-items: center;
          transition: all var(--transition-normal);
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          height: 80px;
          background: rgba(250, 249, 251, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .dark .navbar.scrolled {
          background: rgba(20, 14, 36, 0.92);
          border-bottom: 1px solid var(--color-border);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
        }
        
        /* Logo styling */
        .logo-btn-box {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
        }
        .logo-img-branding {
          height: 65px;
          max-width: 100%;
          object-fit: contain;
          transition: all var(--transition-normal);
        }
        .navbar.scrolled .logo-img-branding {
          height: 52px;
        }
        .dark .logo-img-branding {
          filter: brightness(1.15) contrast(1.05); /* Enhance logo readability in dark mode */
        }
        
        .nav-links-desktop {
          display: flex;
          gap: 28px;
        }
        .nav-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 0.95rem;
          transition: all var(--transition-fast);
          position: relative;
          padding: 8px 0;
        }
        .nav-link-btn::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: var(--color-accent);
          transition: width var(--transition-fast);
        }
        .nav-link-btn:hover {
          color: var(--color-primary);
        }
        .nav-link-btn:hover::after, .nav-link-btn.active::after {
          width: 100%;
        }
        .nav-link-btn.active {
          color: var(--color-primary);
          font-weight: 700;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 16px;
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
        .btn-nav-cta {
          display: inline-flex;
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
          gap: 16px;
        }
        .mobile-link-btn {
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-weight: 600;
          font-size: 1.1rem;
          padding: 12px 0;
          border-bottom: 1px solid var(--color-border);
          width: 100%;
        }
        .mobile-link-btn.active {
          color: var(--color-primary);
        }
        .mobile-cta {
          margin-top: 10px;
          text-align: center;
          width: 100%;
        }

        @media (max-width: 1080px) {
          .nav-links-desktop, .btn-nav-cta {
            display: none;
          }
          .menu-toggle {
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            background-color: var(--bg-surface-hover);
            color: var(--text-primary);
          }
        }
      `}</style>
    </nav>
  );
}
