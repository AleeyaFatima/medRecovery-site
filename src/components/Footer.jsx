import React from 'react';
import { ShieldAlert, ArrowUp } from 'lucide-react';

export default function Footer({ setCurrentPage }) {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer section section-dark">
      <div className="container">
        
        {/* Newsletter Inline Banner */}
        <div className="footer-newsletter-banner">
          <div className="newsletter-text">
            <h3>Subscribe to RCM Insights</h3>
            <p>Stay updated with certified billing recommendations, HIPAA compliance guidelines, and payer strategies.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => { e.preventDefault(); alert('Thank you for subscribing to RCM Insights.'); }}>
            <input 
              type="email" 
              placeholder="Practice email address" 
              required 
              className="newsletter-input"
            />
            <button type="submit" className="btn btn-primary newsletter-submit-btn">
              Subscribe
            </button>
          </form>
        </div>

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
            
            {/* Accreditation Badges */}
            <div className="footer-badges-container">
              <div className="compliance-badge">
                <ShieldAlert size={14} className="badge-icon" />
                <span>HIPAA Secure</span>
              </div>
              <div className="compliance-badge aapc-badge">
                <span className="badge-text-bold">AAPC</span>
                <span>Certified Coding</span>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="footer-column">
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentPage && setCurrentPage('services')} className="footer-nav-btn">Medical Billing</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('coding')} className="footer-nav-btn">Medical Coding</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('collections')} className="footer-nav-btn">Patient Collections</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('credentialing')} className="footer-nav-btn">Payer Credentialing</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('denial')} className="footer-nav-btn">Denial Management</button></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="footer-column">
            <h4 className="footer-col-title">Company</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentPage && setCurrentPage('approach')} className="footer-nav-btn">Our Approach</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('about')} className="footer-nav-btn">About Us</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('faq')} className="footer-nav-btn">FAQs</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('careers')} className="footer-nav-btn">Careers <span className="hiring-badge">Hiring</span></button></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div className="footer-column">
            <h4 className="footer-col-title">Resources</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentPage && setCurrentPage('blog')} className="footer-nav-btn">Billing Insights</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('hipaa')} className="footer-nav-btn">HIPAA Compliance</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('blog')} className="footer-nav-btn">Practice Blog</button></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div className="footer-column">
            <h4 className="footer-col-title">Legal</h4>
            <ul className="footer-links">
              <li><button onClick={() => setCurrentPage && setCurrentPage('privacy')} className="footer-nav-btn">Privacy Policy</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('terms')} className="footer-nav-btn">Terms of Service</button></li>
              <li><button onClick={() => setCurrentPage && setCurrentPage('hipaa')} className="footer-nav-btn">Compliance Statement</button></li>
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
        
        .footer-nav-btn {
          background: none;
          border: none;
          padding: 0;
          color: rgba(255, 255, 255, 0.6);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          text-align: left;
          transition: color var(--transition-fast);
          display: inline-block;
        }
        .footer-nav-btn:hover {
          color: var(--color-accent);
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
        /* Newsletter Banner Styles */
        .footer-newsletter-banner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 24px 32px;
          margin-bottom: 40px;
          gap: 24px;
          text-align: left;
        }
        .newsletter-text h3 {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 700;
          color: #FFFFFF;
          margin-bottom: 6px;
        }
        .newsletter-text p {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.6);
          margin: 0;
        }
        .newsletter-form {
          display: flex;
          gap: 12px;
          flex-shrink: 0;
          width: 100%;
          max-width: 420px;
        }
        .newsletter-input {
          flex: 1;
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 30px;
          padding: 10px 18px;
          color: #FFFFFF;
          font-size: 0.85rem;
          outline: none;
        }
        .newsletter-submit-btn {
          padding: 10px 24px;
          font-size: 0.82rem;
          font-weight: 600;
          flex-shrink: 0;
        }
        
        /* Accreditations Row */
        .footer-badges-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: 20px;
        }
        .aapc-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .badge-text-bold {
          font-weight: 850;
          color: var(--color-accent);
          font-size: 0.68rem;
          letter-spacing: 0.5px;
          background: rgba(192, 132, 252, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          border: 1px solid rgba(192, 132, 252, 0.2);
        }

        @media (max-width: 900px) {
          .footer-newsletter-banner {
            flex-direction: column;
            align-items: stretch;
            padding: 24px;
          }
          .newsletter-form {
            max-width: 100%;
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
