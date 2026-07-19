import React from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import ThreeDAnimation from './ThreeDAnimation';

export default function Hero({ setCurrentPage }) {
  return (
    <header id="home" className="hero-section section">
      {/* Glow Effect */}
      <div className="glow-bubble top-left"></div>
      <div className="glow-bubble bottom-right"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge-wrapper">
            <span className="hero-badge">
              <ShieldCheck size={14} className="badge-icon" /> Established Revenue Recovery
            </span>
          </div>
          
          <h1 className="hero-title">
            Helping Healthcare Providers <span className="text-gradient">Recover Revenue</span> Faster
          </h1>
          
          <p className="hero-subtitle">
            Ensuring physicians get paid for the care they give. We combine industry-leading expert billers with modern transparency workflows to optimize your revenue cycle.
          </p>

          <div className="hero-ctas">
            <button onClick={() => setCurrentPage && setCurrentPage('contact')} className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem', boxShadow: '0 20px 40px rgba(110, 63, 165, 0.25)' }}>
              Schedule Consultation <ArrowRight size={18} />
            </button>
            <button onClick={() => setCurrentPage && setCurrentPage('contact')} className="btn btn-secondary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Get Free Assessment
            </button>
          </div>

          <div className="hero-features">
            <div className="hero-feat-item">
              <span className="feat-highlight">98.7%</span>
              <span className="feat-label">Clean Claim Rate</span>
            </div>
            <div className="hero-feat-divider"></div>
            <div className="hero-feat-item">
              <span className="feat-highlight">10+</span>
              <span className="feat-label">Years of Trust</span>
            </div>
            <div className="hero-feat-divider"></div>
            <div className="hero-feat-item">
              <span className="feat-highlight">50</span>
              <span className="feat-label">States Covered</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <ThreeDAnimation />
        </div>
      </div>

      <style>{`
        .hero-section {
          padding-top: 60px;
          padding-bottom: 60px;
          min-height: calc(100vh - 80px); /* Fills screen height minus navbar height */
          display: flex;
          align-items: center;
          background: radial-gradient(circle at 10% 20%, rgba(0, 168, 169, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 90% 80%, rgba(90, 55, 145, 0.03) 0%, transparent 50%);
        }
        .hero-container {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 48px;
          align-items: center;
        }
        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
        }
        .badge-wrapper {
          margin-bottom: 24px;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background-color: var(--color-accent-bg);
          color: var(--color-primary);
          font-weight: 700;
          font-size: 0.85rem;
          padding: 6px 12px;
          border-radius: 50px;
          border: 1px solid rgba(149, 142, 82, 0.2);
        }
        .hero-title {
          font-size: clamp(2.5rem, 4.5vw, 3.75rem);
          line-height: 1.15;
          margin-bottom: 20px;
        }
        .hero-subtitle {
          font-size: 1.15rem;
          color: var(--text-secondary);
          margin-bottom: 36px;
          max-width: 580px;
        }
        .hero-ctas {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          width: 100%;
        }
        
        .hero-features {
          display: flex;
          align-items: center;
          gap: 24px;
          width: 100%;
        }
        .hero-feat-item {
          display: flex;
          flex-direction: column;
        }
        .feat-highlight {
          font-family: var(--font-mono);
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text-primary);
          line-height: 1.2;
        }
        .feat-label {
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .hero-feat-divider {
          width: 1px;
          height: 32px;
          background-color: var(--color-border);
        }

        .hero-visual {
          position: relative;
          width: 100%;
          display: flex;
          justify-content: center;
        }
        
        /* Hero Team Image Layout */
        .hero-image-wrapper {
          position: relative;
          width: 100%;
          max-width: 480px;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
          overflow: visible;
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--color-border);
          z-index: 10;
        }
        .hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-md);
        }
        .hero-img-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 60%, rgba(20, 14, 36, 0.4) 100%);
          border-radius: var(--radius-md);
          pointer-events: none;
        }

        /* Floating Dashboard Elements overlaying the image */
        .floating-card {
          position: absolute;
          background-color: var(--bg-surface);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 12px;
          width: 170px;
          transition: all var(--transition-normal);
          z-index: 12;
        }
        .floating-card:hover {
          box-shadow: var(--shadow-lg), 0 0 15px rgba(149, 142, 82, 0.15);
          border-color: var(--color-accent);
        }
        
        .floating-card.c1 {
          top: -20px;
          left: -40px;
        }
        .floating-card.c2 {
          bottom: 30px;
          right: -40px;
        }
        .floating-card.c3 {
          bottom: -20px;
          left: 30px;
        }
        
        .float-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .float-card-icon.c-blue {
          background-color: rgba(90, 55, 145, 0.1);
          color: var(--color-primary);
        }
        .float-card-icon.c-green {
          background-color: rgba(34, 197, 94, 0.1);
          color: #22C55E;
        }
        .float-card-icon.c-teal {
          background-color: rgba(0, 168, 169, 0.1);
          color: var(--color-glow);
        }
        .float-card-details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .float-card-label {
          font-size: 0.7rem;
          color: var(--text-muted);
          font-weight: 500;
        }
        .float-card-value {
          font-family: var(--font-mono);
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        /* Glow effects background */
        .glow-bubble {
          position: absolute;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, var(--color-glow) 0%, transparent 70%);
          opacity: 0.04;
          filter: blur(40px);
          z-index: 1;
          pointer-events: none;
        }
        .glow-bubble.top-left {
          top: 10%;
          left: 5%;
        }
        .glow-bubble.bottom-right {
          bottom: 10%;
          right: 5%;
        }

        /* Responsiveness */
        @media (max-width: 900px) {
          .hero-section {
            padding-top: 110px;
            text-align: center;
          }
          .hero-container {
            grid-template-columns: 1fr;
            gap: 60px;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }
          .hero-ctas {
            justify-content: center;
          }
          .hero-features {
            justify-content: center;
          }
          .hero-image-wrapper {
            margin-left: auto;
            margin-right: auto;
          }
          .floating-card.c1 {
            left: -20px;
          }
          .floating-card.c2 {
            right: -20px;
          }
        }
        @media (max-width: 480px) {
          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }
          .hero-ctas .btn {
            width: 100%;
          }
          .hero-features {
            flex-direction: column;
            gap: 16px;
          }
          .hero-feat-divider {
            display: none;
          }
          .floating-card {
            width: 140px;
            padding: 8px 12px;
            gap: 8px;
          }
          .floating-card.c1 {
            left: -10px;
          }
          .floating-card.c2 {
            right: -10px;
          }
        }
      `}</style>
    </header>
  );
}
