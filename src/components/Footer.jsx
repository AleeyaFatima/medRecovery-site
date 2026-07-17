import React from 'react';
import { ShieldAlert, ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section section-dark">
      <div className="container">
        
        {/* Main Footer Content */}
        <div className="footer-grid">
          
          {/* Company Brief */}
          <div className="footer-column brief-col">
            <div className="footer-logo">
              <img 
                src="/logo.png" 
                alt="MedRecovery Solutions, LLC Logo" 
                className="logo-img-footer"
              />
            </div>
            <p className="footer-tagline">
              "Ensuring physicians get paid for the care they give."™
            </p>
            <p className="footer-address">
              Texas Medical Center District<br />
              Houston, Texas
            </p>
            <div className="compliance-badge">
              <ShieldAlert size={14} className="badge-icon" />
              <span>HIPAA Secure Certified</span>
            </div>
          </div>

          {/* Column 2: Solutions */}
          <div className="footer-column">
            <h4 className="footer-col-title">Our Solutions</h4>
            <ul className="footer-links">
              <li><a href="#services">Medical Billing</a></li>
              <li><a href="#services">Revenue Cycle Management</a></li>
              <li><a href="#services">Medical Coding</a></li>
              <li><a href="#services">Patient Collections</a></li>
              <li><a href="#services">Payer Credentialing</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><a href="#approach">Our Approach</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#faq">FAQs</a></li>
              <li><a href="#contact">Contact Support</a></li>
              <li><span className="footer-career-link">Careers <span className="hiring-badge">We're hiring</span></span></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="footer-column newsletter-col">
            <h4 className="footer-col-title">Billing Insights</h4>
            <p className="newsletter-text">
              Subscribe to get billing guide updates and regulatory changes.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="manager@practice.com" className="news-input" />
              <button type="submit" className="btn btn-accent btn-sm news-submit">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer Info */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; {currentYear} MedRecovery Solutions, LLC. All rights reserved.</span>
            <div className="legal-links">
              <a href="#">Privacy Policy</a>
              <span className="dot-divider">&middot;</span>
              <a href="#">Terms of Service</a>
              <span className="dot-divider">&middot;</span>
              <a href="#">System Status</a>
            </div>
          </div>
          
          <button onClick={handleScrollTop} className="scroll-top-btn" aria-label="Scroll to top of page">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

      </div>

      <style>{`
        .footer {
          background-color: var(--color-dark-section);
          padding-top: 80px;
          padding-bottom: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.8fr 1.2fr;
          gap: 40px;
          text-align: left;
        }
        
        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        .logo-img-footer {
          height: 52px;
          object-fit: contain;
          background-color: rgba(255, 255, 255, 0.96); /* pill badge matching header in dark fold */
          padding: 6px 12px;
          border-radius: var(--radius-sm);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-tagline {
          font-style: italic;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 16px;
          line-height: 1.4;
        }
        .footer-address {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 24px;
        }
        
        .compliance-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(239, 68, 68, 0.08);
          color: #F87171;
          font-size: 0.75rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid rgba(239, 68, 68, 0.2);
        }
        
        .footer-col-title {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 24px;
          font-weight: 700;
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          transition: color var(--transition-fast);
        }
        .footer-links a:hover {
          color: var(--color-accent);
        }
        .footer-career-link {
          color: rgba(255, 255, 255, 0.6);
          font-size: 0.9rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hiring-badge {
          font-size: 0.65rem;
          background-color: var(--color-accent-bg);
          color: var(--color-accent);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }
        
        .newsletter-col {
          max-width: 320px;
        }
        .newsletter-text {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: 16px;
        }
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
          width: 100%;
        }
        .news-input {
          font-family: var(--font-sans);
          padding: 10px 14px;
          border-radius: var(--radius-sm);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background-color: rgba(255, 255, 255, 0.03);
          color: #FFFFFF;
          font-size: 0.9rem;
          width: 100%;
        }
        .news-input:focus {
          outline: none;
          border-color: var(--color-accent);
          background-color: rgba(255, 255, 255, 0.05);
        }
        .news-submit {
          width: 100%;
        }
        
        .footer-divider {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.08);
          margin: 60px 0 30px 0;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-copyright {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          flex-wrap: wrap;
          text-align: left;
        }
        .legal-links {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .legal-links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.5);
          transition: color var(--transition-fast);
        }
        .legal-links a:hover {
          color: var(--color-accent);
        }
        .dot-divider {
          color: rgba(255, 255, 255, 0.2);
        }
        
        .scroll-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.6);
          padding: 8px 14px;
          border-radius: 50px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all var(--transition-fast);
        }
        .scroll-top-btn:hover {
          background-color: var(--color-accent);
          color: #FFFFFF;
          border-color: var(--color-accent);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 48px;
          }
        }
        @media (max-width: 600px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            align-items: center;
          }
          .footer-copyright {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
