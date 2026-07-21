import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import Logo from './Logo';

export default function Navbar({ theme, toggleTheme, currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

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
    { name: 'Careers', value: 'careers' },
    { name: 'Blog', value: 'blog' },
    { name: 'Contact Us/Get Started', value: 'contact' },
  ];

  const serviceSubLinks = [
    { name: 'Overview', value: 'services' },
    { name: 'Medical Billing Solutions', value: 'services' },
    { name: 'Medical Collections', value: 'collections' },
    { name: 'Payer Credentialing', value: 'credentialing' },
    { name: 'Certified Medical Coding', value: 'coding' },
    { name: 'Denial Management & Appeals', value: 'denial' },
    { name: 'Accounts Receivable Recovery', value: 'ar-recovery' },
    { name: 'Eligibility & Prior Auth', value: 'eligibility' },
    { name: 'Virtual Medical Assistant', value: 'virtual-assistant' }
  ];

  const handleNavClick = (value) => {
    setCurrentPage(value);
    setIsOpen(false);
    setServicesExpanded(false);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        {/* Brand Image Logo Container */}
        <button onClick={() => handleNavClick('home')} className="logo-btn-box" aria-label="MedRecovery Home">
          <Logo className="logo-img-branding" />
        </button>

        {/* Desktop Navigation Link Tabs (Prominent tab-bar styling) */}
        <div className="nav-links-desktop">
          {navLinks.map((link) => {
            if (link.value === 'services') {
              const isServiceActive = currentPage === 'services' || serviceSubLinks.some(s => currentPage === s.value);
              return (
                <div key={link.name} className="nav-dropdown-wrapper">
                  <button
                    className={`nav-link-btn ${isServiceActive ? 'active' : ''}`}
                    onClick={() => handleNavClick('services')}
                  >
                    {link.name}
                  </button>
                  <div className="nav-dropdown-content">
                    {serviceSubLinks.slice(1).map((sub) => (
                      <button
                        key={sub.name}
                        onClick={() => handleNavClick(sub.value)}
                        className={`dropdown-item-btn ${currentPage === sub.value ? 'active-item' : ''}`}
                      >
                        {sub.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            }
            return (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.value)}
                className={`nav-link-btn ${currentPage === link.value ? 'active' : ''}`}
              >
                {link.name}
              </button>
            );
          })}
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
            <Logo 
              className="logo-img-branding" 
              style={{ width: '200px', height: 'auto' }}
            />
            <button onClick={() => setIsOpen(false)} className="menu-close">
              <X size={24} />
            </button>
          </div>
          <div className="mobile-links">
            {navLinks.map((link) => {
              if (link.value === 'services') {
                const isServiceActive = currentPage === 'services' || serviceSubLinks.some(s => currentPage === s.value);
                return (
                  <div key={link.name} className="mobile-accordion-wrapper">
                    <button
                      className={`mobile-link-btn accordion-trigger ${isServiceActive ? 'active' : ''}`}
                      onClick={() => setServicesExpanded(!servicesExpanded)}
                    >
                      <span>{link.name}</span>
                      <span className={`arrow-indicator ${servicesExpanded ? 'expanded' : ''}`}>▼</span>
                    </button>
                    <div className={`mobile-accordion-content ${servicesExpanded ? 'open' : ''}`}>
                      {serviceSubLinks.map((sub) => (
                        <button
                          key={sub.name}
                          className={`mobile-sublink-btn ${currentPage === sub.value ? 'active' : ''}`}
                          onClick={() => handleNavClick(sub.value)}
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }
              return (
                <button
                  key={link.name}
                  className={`mobile-link-btn ${currentPage === link.value ? 'active' : ''}`}
                  onClick={() => handleNavClick(link.value)}
                >
                  {link.name}
                </button>
              );
            })}
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
          height: 160px;
          display: flex;
          align-items: center;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          background: var(--bg-primary) !important; /* Solid background shelf to block scrolling text */
          border-bottom: 1px solid var(--color-border) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          padding: 0;
        }
        .navbar.scrolled {
          height: 125px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }
        .dark .navbar {
          background: var(--bg-primary) !important;
          border-color: var(--color-border) !important;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }
        .dark .navbar.scrolled {
          background: var(--bg-primary) !important;
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 40px; /* 40px left and right padding */
          overflow: visible; /* Prevent any logo clipping */
          position: relative; /* absolute alignment parent */
        }
        
        /* Logo branding - Standard transparent layout in normal flow */
        .logo-btn-box {
          background: none !important;
          border: none !important;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
          overflow: visible;
          box-shadow: none !important;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        .logo-img-branding {
          width: 310px; /* Sized up to 310px wide to make the bottom subtext clearly visible and readable */
          height: auto;
          object-fit: contain;
          overflow: visible;
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
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
          width: 240px; /* Sticky header logo sized up to 240px wide */
          height: auto;
        }
        .dark .logo-img-branding {
          filter: none;
          mix-blend-mode: normal;
        }
        
        /* Modern minimal text links matching Headway/Cedar */
        .nav-links-desktop {
          display: flex;
          gap: 6px; /* small spacing gap between pill buttons */
          align-items: center;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .nav-link-btn {
          background: transparent;
          border: 1.5px solid transparent;
          cursor: pointer;
          color: var(--text-secondary);
          font-family: var(--font-sans);
          font-weight: 500;
          font-size: 14px; /* Reduced navigation font size */
          padding: 8px 16px; /* Pill-button padding */
          border-radius: 30px; /* Modern pill container style */
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          text-transform: capitalize;
          position: relative;
          white-space: nowrap; /* prevent wrapping onto multiple lines */
        }
        .navbar.scrolled .nav-link-btn {
          font-size: 13px; /* 13px in the sticky header */
          padding: 6px 12px;
        }
        .dark .nav-link-btn {
          color: rgba(255, 255, 255, 0.7);
        }
        .nav-link-btn:hover {
          color: var(--color-primary);
          background: rgba(110, 63, 165, 0.08) !important;
          border-color: rgba(110, 63, 165, 0.12);
        }
        .dark .nav-link-btn:hover {
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.08) !important;
          border-color: rgba(255, 255, 255, 0.12);
        }
        .nav-link-btn.active {
          background: rgba(110, 63, 165, 0.12) !important;
          border-color: var(--color-primary) !important;
          color: var(--color-primary) !important;
          font-weight: 600;
          box-shadow: none !important;
        }
        .dark .nav-link-btn.active {
          background: rgba(192, 132, 252, 0.15) !important;
          border-color: var(--color-primary) !important;
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
          .logo-img-branding {
            width: 120px !important;
          }
          .navbar {
            height: 100px;
          }
          .navbar.scrolled {
            height: 80px;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 16px;
          }
          .logo-img-branding {
            width: 95px !important;
          }
          .navbar {
            height: 80px;
          }
          .navbar.scrolled {
            height: 72px;
          }
        }
        /* Desktop Dropdown menu */
        .nav-dropdown-wrapper {
          position: relative;
          display: inline-block;
        }
        .nav-dropdown-content {
          display: none;
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          min-width: 240px;
          background: rgba(10, 7, 20, 0.95);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 12px;
          padding: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          z-index: 1000;
        }
        .light .nav-dropdown-content {
          background: rgba(255, 255, 255, 0.98);
          border-color: rgba(0, 0, 0, 0.06);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }
        .nav-dropdown-wrapper:hover .nav-dropdown-content {
          display: flex;
          flex-direction: column;
          gap: 2px;
          animation: dropdownFadeIn 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        @keyframes dropdownFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(15px); }
          to { opacity: 1; transform: translateX(-50%) translateY(8px); }
        }
        .dropdown-item-btn {
          width: 100%;
          background: transparent;
          border: none;
          text-align: left;
          padding: 8px 16px;
          border-radius: 8px;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 550;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .dropdown-item-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: var(--color-accent);
          padding-left: 20px;
        }
        .light .dropdown-item-btn:hover {
          background: rgba(0, 0, 0, 0.03);
        }
        .dropdown-item-btn.active-item {
          color: var(--color-accent);
          background: rgba(192, 132, 252, 0.08);
        }

        /* Mobile Accordion Menu */
        .mobile-accordion-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: stretch;
        }
        .accordion-trigger {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .arrow-indicator {
          font-size: 0.65rem;
          transition: transform 0.2s ease;
          color: var(--text-muted);
        }
        .arrow-indicator.expanded {
          transform: rotate(180deg);
          color: var(--color-accent);
        }
        .mobile-accordion-content {
          display: none;
          flex-direction: column;
          gap: 4px;
          padding-left: 16px;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          margin: 6px 0 6px 8px;
        }
        .light .mobile-accordion-content {
          border-left-color: rgba(0, 0, 0, 0.05);
        }
        .mobile-accordion-content.open {
          display: flex;
        }
        .mobile-sublink-btn {
          background: transparent;
          border: none;
          text-align: left;
          padding: 8px 12px;
          font-family: var(--font-sans);
          font-size: 0.82rem;
          font-weight: 550;
          color: var(--text-secondary);
          cursor: pointer;
          border-radius: 6px;
          transition: all 0.2s ease;
          border-bottom: none !important;
        }
        .mobile-sublink-btn:hover {
          color: var(--color-accent);
          background: rgba(255, 255, 255, 0.03);
        }
        .light .mobile-sublink-btn:hover {
          background: rgba(0, 0, 0, 0.02);
        }
        .mobile-sublink-btn.active {
          color: var(--color-accent);
          background: rgba(192, 132, 252, 0.06);
        }
      `}</style>
    </nav>
  );
}
