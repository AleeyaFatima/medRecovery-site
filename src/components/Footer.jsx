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
          
          {/* Company Brief & Socials */}
          <div className="footer-column brief-col">
            <div className="footer-logo">
              <img 
                src="/logo_dark.png?v=3" 
                alt="MedRecovery Solutions, LLC Logo" 
                className="logo-img-footer"
              />
            </div>
            <p className="footer-tagline">
              "Ensuring physicians get paid for the care they give."™
            </p>
            <div className="social-links-row">
              <a href="#" className="social-icon-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Twitter">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="Facebook">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            <div className="compliance-badge">
              <ShieldAlert size={14} className="badge-icon" />
              <span>HIPAA Secure Certified</span>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Medical Billing</a></li>
              <li><a href="#services">Revenue Cycle</a></li>
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
              <li><span className="footer-career-link">Careers <span className="hiring-badge">Hiring</span></span></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-column">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><a href="#">Billing Insights</a></li>
              <li><a href="#">HIPAA Compliance</a></li>
              <li><a href="#">Claims Checklist</a></li>
              <li><a href="#">Practice Blog</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="footer-column">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">BAA Agreement</a></li>
              <li><a href="#">Compliance Statement</a></li>
            </ul>
          </div>

          {/* Column 6: Contact Information */}
          <div className="footer-column contact-col">
            <h4 className="footer-col-title">Contact</h4>
            <ul className="footer-links contact-info-links">
              <li><a href="tel:7135550190" className="footer-contact-link">(713) 555-0190</a></li>
              <li><a href="mailto:onboarding@medrecoverysolutions.com" className="footer-contact-link">onboarding@medrecoverysolutions.com</a></li>
              <li className="footer-contact-text">2400 Baylor St, Suite 400<br />Houston, TX 77030</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom Footer Info */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <span>&copy; {currentYear} MedRecovery Solutions, LLC. All rights reserved.</span>
          </div>
          
          <button onClick={handleScrollTop} className="scroll-top-btn" aria-label="Scroll to top of page">
            <ArrowUp size={16} />
            <span>Top</span>
          </button>
        </div>

      </div>

      <style>{`
        .footer {
          background-color: var(--color-dark-section) !important;
          padding-top: 80px;
          padding-bottom: 50px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          transition: background-color var(--transition-normal);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr 1fr;
          gap: 32px;
          text-align: left;
        }
        
        .footer-column {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        
        .footer-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: #FFFFFF !important; /* Pure White box background as requested */
          padding: 10px 18px;
          border-radius: 12px;
          border: 1px solid rgba(0, 0, 0, 0.08);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.12);
          margin-bottom: 16px;
          width: fit-content;
        }
        .logo-img-footer {
          height: 100px; /* Scaled to fit perfectly inside the box container */
          object-fit: contain;
          filter: none; /* Reverted to show original logo colors */
        }
        
        .footer-tagline {
          font-style: italic;
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 16px;
          line-height: 1.4;
        }
        
        .social-links-row {
          display: flex;
          gap: 12px;
          margin-bottom: 20px;
        }
        .social-icon-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.05);
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          transition: all var(--transition-fast);
        }
        .social-icon-btn:hover {
          background-color: var(--color-accent);
          color: #FFFFFF;
          transform: translateY(-2px);
        }
        
        .compliance-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: rgba(97, 97, 56, 0.12);
          color: #D0D0AD;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid rgba(97, 97, 56, 0.4);
        }
        
        .footer-col-title {
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #FFFFFF;
          margin-bottom: 20px;
          font-weight: 700;
        }
        
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          transition: all var(--transition-fast);
          display: inline-block;
        }
        .footer-links a:hover {
          color: var(--color-accent);
          transform: translateX(2px);
        }
        .footer-career-link {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.85rem;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .hiring-badge {
          font-size: 0.6rem;
          background-color: rgba(200, 154, 61, 0.15);
          color: var(--color-accent);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
        }
        
        .contact-info-links {
          gap: 12px;
        }
        .footer-contact-link {
          font-weight: 600;
        }
        .footer-contact-text {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
        }
        
        .footer-divider {
          height: 1px;
          background-color: rgba(255, 255, 255, 0.08);
          margin: 40px 0 24px 0;
        }
        
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }
        .footer-copyright {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.5);
          text-align: left;
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

        @media (max-width: 1200px) {
          .footer-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 40px;
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 32px;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-bottom {
            flex-direction: column-reverse;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
