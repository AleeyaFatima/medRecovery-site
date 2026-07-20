import React, { useState, useEffect } from 'react';
import { ShieldCheck, X } from 'lucide-react';

export default function CookieConsent({ setCurrentPage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('medrecovery-cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('medrecovery-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('medrecovery-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner-wrapper">
      <div className="container cookie-container">
        <div className="cookie-content">
          <ShieldCheck size={20} className="cookie-icon" />
          <p className="cookie-text">
            We use cookies to analyze site traffic, optimize our billing portals, and deliver personalized experiences. By clicking "Accept All", you consent to our cookies in accordance with our{' '}
            <button 
              onClick={() => {
                setIsVisible(false);
                if (setCurrentPage) setCurrentPage('privacy');
              }}
              className="cookie-link-btn"
            >
              Privacy Policy
            </button>.
          </p>
        </div>
        <div className="cookie-actions">
          <button onClick={handleDecline} className="btn-cookie-decline">
            Decline
          </button>
          <button onClick={handleAccept} className="btn btn-primary btn-cookie-accept">
            Accept All
          </button>
        </div>
      </div>

      <style>{`
        .cookie-banner-wrapper {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(10, 7, 20, 0.95);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding: 16px 0;
          z-index: 9998;
          animation: slideUpBanner 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
          font-family: var(--font-sans);
        }
        .light .cookie-banner-wrapper {
          background: rgba(255, 255, 255, 0.98);
          border-top-color: rgba(0, 0, 0, 0.06);
        }
        @keyframes slideUpBanner {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        
        .cookie-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 24px;
        }
        .cookie-content {
          display: flex;
          align-items: center;
          gap: 12px;
          text-align: left;
          flex: 1;
        }
        .cookie-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        .cookie-text {
          font-size: 0.82rem;
          color: var(--text-secondary);
          margin: 0;
          line-height: 1.4;
        }
        .cookie-link-btn {
          background: none;
          border: none;
          padding: 0;
          color: var(--color-accent);
          font-weight: 600;
          text-decoration: underline;
          cursor: pointer;
          font-family: inherit;
          font-size: inherit;
        }
        
        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }
        .btn-cookie-decline {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: var(--text-primary);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .light .btn-cookie-decline {
          border-color: rgba(0, 0, 0, 0.1);
        }
        .btn-cookie-decline:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.2);
        }
        .light .btn-cookie-decline:hover {
          background: rgba(0, 0, 0, 0.03);
          border-color: rgba(0, 0, 0, 0.15);
        }
        .btn-cookie-accept {
          padding: 8px 20px;
          font-size: 0.8rem;
          font-weight: 600;
        }
        
        @media (max-width: 768px) {
          .cookie-container {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .cookie-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }
      `}</style>
    </div>
  );
}
