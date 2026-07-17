import React from 'react';
import Approach from '../components/Approach';
import Timeline from '../components/Timeline';
import { motion } from 'framer-motion';
import { Lock, FileText, CheckCircle } from 'lucide-react';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.3 } }
};

export default function ApproachPage() {
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
          
          <div className="header-img-box">
            <img 
              src="/approach_img.png" 
              alt="Healthcare Billing Management Team Meeting" 
              className="header-img"
            />
            <div className="img-glow-shadow"></div>
          </div>

          <div className="page-header-right">
            <span className="section-tag">Security & Speed</span>
            <h1 className="page-title">Our Integrated Approach</h1>
            <p className="page-desc">
              How we protect patient trust and accelerate clinical collections through secure technology and active specialist oversight.
            </p>
            <div className="feature-bullets">
              <div className="f-bullet">
                <Lock size={18} className="f-bullet-icon" />
                <span>Secure patient billing data under strict HIPAA parameters</span>
              </div>
              <div className="f-bullet">
                <FileText size={18} className="f-bullet-icon" />
                <span>Daily automated claims checking and scrubs</span>
              </div>
              <div className="f-bullet">
                <CheckCircle size={18} className="f-bullet-icon" />
                <span>Direct integration with Epic, Athena, eClinicalWorks, and more</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Approach />
      <Timeline />

      <style>{`
        .page-header {
          padding-top: 190px;
          padding-bottom: 80px;
          background: linear-gradient(135deg, var(--color-dark-section) 0%, var(--color-primary) 100%);
          text-align: left;
        }
        .page-header-grid {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 60px;
          align-items: center;
        }
        .page-header-right {
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
          .page-header-grid > :first-child {
            order: 2;
          }
          .page-header {
            padding-top: 170px;
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
