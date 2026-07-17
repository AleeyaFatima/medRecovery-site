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

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        
        {/* Brand Image Logo Container */}
        <button onClick={() => handleNavClick('home')} className="logo-btn-box" aria-label="MedRecovery Home">
          <img 
            src="/logo.png?v=2" 
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
              src="/logo.png?v=2" 
              alt="MedRecovery Solutions, LLC Logo" 
              className="logo-img-branding" 
              style={{ height: '60px' }}
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
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          height: 160px; /* Increased from 120px to comfortably fit the larger logo */
          display: flex;
          align-items: center;
          transition: all var(--transition-normal);
          background: transparent;
          border-bottom: 1px solid transparent;
        }
        .navbar.scrolled {
          height: 125px; /* Increased from 95px */
          background: rgba(250, 249, 251, 0.94);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--color-border);
          box-shadow: var(--shadow-sm);
        }
        .dark .navbar.scrolled {
          background: rgba(20, 14, 36, 0.94);
          border-bottom: 1px solid var(--color-border);
        }
        .nav-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          gap: 16px;
        }
        
        /* Logo blending style to look native, not pasted */
        .logo-btn-box {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-img-branding {
          height: 135px; /* Increased from 88px for full readability of logo and tagline */
          object-fit: contain;
          transition: all var(--transition-normal);
        }
        .navbar.scrolled .logo-img-branding {
          height: 105px; /* Increased from 68px */
        }
        .dark .logo-img-branding {
          /* Apply high-contrast drop-shadow halo glow to stand out transparently on dark purple/navy background */
          filter: drop-shadow(0px 0px 1px rgba(255, 255, 255, 0.8)) drop-shadow(0px 0px 4px rgba(255, 255, 255, 0.3));
        }
        
        /* Prominent menu tab layout similar to older site but modern */
        .nav-links-desktop {
          display: flex;
          border: 1px solid var(--color-border);
          border-radius: var(--radius-sm);
          overflow: hidden;
          background: linear-gradient(to bottom, #FCFCFC 0%, #EAEAEA 100%);
          box-shadow: var(--shadow-sm);
        }
        .dark .nav-links-desktop {
          background: linear-gradient(to bottom, #231B3E 0%, #150E2A 100%);
          border-color: var(--color-border);
        }
        .nav-link-btn {
          background: transparent;
          border: none;
          border-right: 1px solid var(--color-border);
          cursor: pointer;
          color: var(--text-primary);
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 0.82rem;
          padding: 12px 16px;
          transition: all var(--transition-fast);
          text-transform: capitalize;
        }
        .dark .nav-link-btn {
          color: #EAE5F5;
          border-right: 1px solid var(--color-border);
        }
        .nav-link-btn:last-child {
          border-right: none;
        }
        .nav-link-btn:hover {
          background-color: rgba(90, 55, 145, 0.08);
          color: var(--color-primary);
        }
        .dark .nav-link-btn:hover {
          background-color: rgba(255, 255, 255, 0.05);
          color: var(--color-accent);
        }
        .nav-link-btn.active {
          background: linear-gradient(to bottom, var(--color-primary) 0%, #462573 100%) !important;
          color: #FFFFFF !important;
          box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        .dark .nav-link-btn.active {
          background: linear-gradient(to bottom, var(--color-primary) 0%, #462573 100%) !important;
          color: #FFFFFF !important;
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
