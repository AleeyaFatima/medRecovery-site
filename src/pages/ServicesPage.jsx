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
        <div className="container page-header-grid">
          <div className="page-header-left">
            <span className="section-tag">RCM Solutions</span>
            <h1 className="page-title">Professional Medical RCM Solutions</h1>
            <p className="page-desc">
              Maximize clinic efficiency and clean-claim rates with dedicated certified billers and transparent reporting tools.
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
          
          <div className="header-img-box">
            <img 
              src="/services_img.webp" 
              alt="Medical Billing Audits and Claims Verification" 
              className="header-img"
              loading="eager"
            />
            <div className="img-glow-shadow"></div>
          </div>
        </div>
      </div>
      
      <Services />
      <Stats />

      <style>{`
        .page-header {
          padding-top: 100px;
          padding-bottom: 70px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: left;
        }
        .page-header-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 60px;
          align-items: center;
        }
        .page-header-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .page-title {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #FFFFFF;
          margin-bottom: 16px;
          line-height: 1.2;
          font-family: var(--font-heading);
          font-weight: 800;
        }
        .page-desc {
          font-size: 1.15rem;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 24px;
          line-height: 1.5;
        }
        
        .feature-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }
        .f-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 0.95rem;
          font-weight: 600;
          color: #FFFFFF;
        }
        .f-bullet-icon {
          color: var(--color-accent);
          flex-shrink: 0;
        }
        
        .header-img-box {
          position: relative;
          width: 100%;
          aspect-ratio: 4/3;
          border-radius: var(--radius-md);
        }
        .header-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: var(--radius-md);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: var(--shadow-lg);
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
          .page-header-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .page-header {
            padding-top: 200px;
            padding-bottom: 60px;
          }
          .header-img-box {
            margin-left: auto;
            margin-right: auto;
            max-width: 500px;
          }
        }
      `}</style>
    </motion.div>
  );
}
