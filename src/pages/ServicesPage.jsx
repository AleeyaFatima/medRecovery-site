import React from 'react';
import Services from '../components/Services';
import Stats from '../components/Stats';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function ServicesPage() {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="page-content"
    >
      <div className="page-header section-dark">
        <div className="container">
          <h1 className="page-title">Professional Medical RCM Solutions</h1>
          <p className="page-desc">
            Maximize clinic efficiency and clean-claim rates with dedicated certified billers and transparent reporting tools.
          </p>
        </div>
      </div>

      {/* Featured Services Visual Block */}
      <section className="section services-feature-block">
        <div className="container">
          <div className="grid-2 feature-block-grid">
            <div className="feature-block-text">
              <span className="section-tag">Quality Audit</span>
              <h2>Optimized Claim Scrubbing & Submissions</h2>
              <p>
                Our billing cycles go beyond standard template entries. Every claim is scrubbed for diagnostic code validity (ICD-10, CPT, HCPCS modifiers) by certified AAPC coders before electronic transmittal to prevent payor rejection codes.
              </p>
              <div className="feature-bullets">
                <div className="f-bullet">
                  <CheckCircle2 size={18} className="f-bullet-icon" />
                  <span>Real-time claim status tracking via provider portal</span>
                </div>
                <div className="f-bullet">
                  <CheckCircle2 size={18} className="f-bullet-icon" />
                  <span>Comprehensive payer credentialing management</span>
                </div>
                <div className="f-bullet">
                  <CheckCircle2 size={18} className="f-bullet-icon" />
                  <span>Denial appeals drafted by certified clinical specialists</span>
                </div>
              </div>
            </div>
            
            {/* Services Page Illustration Image */}
            <div className="feature-block-img-box">
              <img 
                src="/services_img.png" 
                alt="Medical Billing Audits and Claims Verification" 
                className="services-feature-img"
              />
              <div className="img-glow-shadow"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Services />
      <Stats />

      <style>{`
        .page-header {
          padding-top: 150px;
          padding-bottom: 60px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: center;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 16px;
        }
        .page-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          max-width: 700px;
          margin: 0 auto;
        }
        
        .services-feature-block {
          background-color: transparent;
          border-bottom: 1px solid var(--color-border);
        }
        .feature-block-grid {
          align-items: center;
          gap: 60px;
        }
        .feature-block-text {
          text-align: left;
        }
        .feature-block-text h2 {
          font-size: 2.2rem;
          margin-top: 12px;
          margin-bottom: 20px;
        }
        .feature-block-text p {
          font-size: 1.05rem;
          color: var(--text-secondary);
          margin-bottom: 24px;
        }
        .feature-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .f-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text-primary);
        }
        .f-bullet-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        
        .feature-block-img-box {
          position: relative;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .services-feature-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-md);
          border: 1px solid var(--color-border);
          box-shadow: var(--shadow-md);
          position: relative;
          z-index: 2;
        }
        .img-glow-shadow {
          position: absolute;
          inset: -10px;
          background: radial-gradient(circle, var(--color-accent-bg) 0%, transparent 70%);
          z-index: 1;
          opacity: 0.5;
        }
        
        @media (max-width: 900px) {
          .feature-block-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .feature-block-img-box {
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>
    </motion.div>
  );
}
